import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Route to handle URL redirection
app.use((req, res, next) => {
  const urlParts = req.path.split('/').filter(Boolean); // Split and remove empty parts
  if (urlParts.length === 4) {
    const newUrl = `/${urlParts[0]}/${urlParts[1]}/${urlParts[2]}`;
    return res.redirect(301, newUrl);
  }
  next();
});

// Sample route for demonstration
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Application');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
