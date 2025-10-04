import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve header.html and footer.html for fetch requests
app.get('/header.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/header.html'));
});
app.get('/footer.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/footer.html'));
});

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
