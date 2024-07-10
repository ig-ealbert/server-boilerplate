import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Express server!');
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});