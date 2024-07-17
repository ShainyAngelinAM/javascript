const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search query: ${query}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
