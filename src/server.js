import app from './app.js';

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('🚀 Server is running successfully!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`http://localhost:${PORT}`);
});