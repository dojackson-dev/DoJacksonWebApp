Param(
    [int]$Port = 8000
)

# serve.ps1
# Starts a simple static file server for the `dist` directory if present, otherwise the current directory.
# Preference order: .NET HttpListener (embedded), Python -> npx http-server -> instructions.

function Start-EmbeddedHttpListener {
    param(
        [int]$PortToUse = 8000,
        [string]$Root = "dist"
    )

    Add-Type -AssemblyName System.Net.HttpListener
    $listener = New-Object System.Net.HttpListener
    $prefix = "http://127.0.0.1:$PortToUse/"
    $listener.Prefixes.Add($prefix)
    try {
        $listener.Start()
    } catch {
        return $false
    }

    Write-Host "Embedded server running at $prefix serving folder: $Root" -ForegroundColor Green
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        Start-Job -ArgumentList $context, $Root -ScriptBlock {
            param($ctx, $root)
            try {
                $req = $ctx.Request
                $res = $ctx.Response
                $urlPath = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath.TrimStart('/'))
                if ([string]::IsNullOrEmpty($urlPath)) { $urlPath = 'index.html' }
                $filePath = Join-Path (Join-Path (Get-Location) $root) $urlPath
                if (-not (Test-Path $filePath)) {
                    $res.StatusCode = 404
                    $bytes = [System.Text.Encoding]::UTF8.GetBytes('Not Found')
                    $res.OutputStream.Write($bytes, 0, $bytes.Length)
                    $res.Close()
                    return
                }
                $content = [System.IO.File]::ReadAllBytes($filePath)
                $res.ContentLength64 = $content.Length
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                switch ($ext) {
                    '.html' { $res.ContentType = 'text/html' }
                    '.css'  { $res.ContentType = 'text/css' }
                    '.js'   { $res.ContentType = 'application/javascript' }
                    '.json' { $res.ContentType = 'application/json' }
                    '.png'  { $res.ContentType = 'image/png' }
                    '.jpg' { $res.ContentType = 'image/jpeg' }
                    '.jpeg' { $res.ContentType = 'image/jpeg' }
                    '.svg' { $res.ContentType = 'image/svg+xml' }
                    '.ico' { $res.ContentType = 'image/x-icon' }
                    default { $res.ContentType = 'application/octet-stream' }
                }
                $res.OutputStream.Write($content, 0, $content.Length)
                $res.Close()
            } catch {
                try { $_.Exception | Out-String | Write-Host -ForegroundColor Red } catch {}
            }
        } | Out-Null
    }
    return $true
}

Write-Host "Starting local server in: $(Get-Location) on port $Port" -ForegroundColor Cyan

# prefer to serve the 'dist' folder if it exists
$rootToServe = 'dist'
if (-not (Test-Path $rootToServe)) { $rootToServe = '.' }

# Try embedded listener first (no external dependencies)
if (Start-EmbeddedHttpListener -PortToUse $Port -Root $rootToServe) {
    Write-Host "Server stopped." -ForegroundColor Cyan
    exit 0
}

$py = Get-Command py -ErrorAction SilentlyContinue
$python = Get-Command python -ErrorAction SilentlyContinue
$npx = Get-Command npx -ErrorAction SilentlyContinue

if ($py) {
    Write-Host "Using 'py' to run Python HTTP server bound to 127.0.0.1 serving $rootToServe..." -ForegroundColor Green
    Set-Location $rootToServe
    & py -3 -m http.server $Port --bind 127.0.0.1
    exit $LASTEXITCODE
} elseif ($python) {
    Write-Host "Using 'python' to run Python HTTP server bound to 127.0.0.1 serving $rootToServe..." -ForegroundColor Green
    Set-Location $rootToServe
    & python -m http.server $Port --bind 127.0.0.1
    exit $LASTEXITCODE
} elseif ($npx) {
    Write-Host "Using 'npx http-server' bound to 127.0.0.1 serving $rootToServe (will download if needed) ..." -ForegroundColor Green
    Set-Location $rootToServe
    & npx http-server -p $Port -a 127.0.0.1
    exit $LASTEXITCODE
} else {
    Write-Host "No Python or npx found in PATH. Falling back to embedded server failed or was unavailable." -ForegroundColor Yellow
    Write-Host "Install Python (recommended) or Node.js, or run this with a shell that has 'npx' available." -ForegroundColor Yellow
    Write-Host "Quick options:" -ForegroundColor Cyan
    Write-Host "  - Install Python and run: pwsh -File .\\serve.ps1 -Port 8000" -ForegroundColor Gray
    Write-Host "  - Install Node.js and then run: npx http-server -p 8000" -ForegroundColor Gray
    exit 1
}
