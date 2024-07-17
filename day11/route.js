const express = require('express');
const app = express();
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
  });
  app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  