Local development server (Windows PowerShell)
============================================

Quick way to serve the frontend folder locally for development and testing.

Usage (PowerShell)
-------------------

From the repository root (where this file lives):

1. Open PowerShell and change to the frontend folder:

   cd C:\Users\larry\dojfoundation\src\frontend

2. Run the server script (default port 8000):

   .\serve.ps1

3. Optionally change port:

   .\serve.ps1 -Port 3000

What the script does
---------------------

- Prefers Python's built-in HTTP server (py or python) if available.
- Falls back to `npx http-server` if Node.js is installed.
- Prints helpful instructions if neither is available.

Alternative commands
--------------------

- If you have Python 3: `py -3 -m http.server 8000` or `python -m http.server 8000`
- If you have Node.js: `npx http-server -p 8000`
