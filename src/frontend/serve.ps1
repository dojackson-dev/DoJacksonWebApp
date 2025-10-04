Param(
    [int]$Port = 8000
)

# serve.ps1
# Starts a simple static file server for the current directory.
# Preference order: Python (py/python) -> npx http-server -> show instructions.

Write-Host "Starting local server in: $(Get-Location) on port $Port" -ForegroundColor Cyan

$py = Get-Command py -ErrorAction SilentlyContinue
$python = Get-Command python -ErrorAction SilentlyContinue
$npx = Get-Command npx -ErrorAction SilentlyContinue

if ($py) {
    Write-Host "Using 'py' to run Python HTTP server bound to 127.0.0.1..." -ForegroundColor Green
    & py -3 -m http.server $Port --bind 127.0.0.1
    exit $LASTEXITCODE
} elseif ($python) {
    Write-Host "Using 'python' to run Python HTTP server bound to 127.0.0.1..." -ForegroundColor Green
    & python -m http.server $Port --bind 127.0.0.1
    exit $LASTEXITCODE
} elseif ($npx) {
    Write-Host "Using 'npx http-server' bound to 127.0.0.1 (will download if needed) ..." -ForegroundColor Green
    & npx http-server -p $Port -a 127.0.0.1
    exit $LASTEXITCODE
} else {
    Write-Host "No Python or npx found in PATH." -ForegroundColor Yellow
    Write-Host "Install Python (recommended) or Node.js, or run this with a shell that has 'npx' available." -ForegroundColor Yellow
    Write-Host "Quick options:" -ForegroundColor Cyan
    Write-Host "  - Install Python and run: pwsh -File .\\serve.ps1 -Port 8000" -ForegroundColor Gray
    Write-Host "  - Install Node.js and then run: npx http-server -p 8000" -ForegroundColor Gray
    exit 1
}
