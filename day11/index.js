const express = require('express');
const app = express();
app.use(express.json());
app.get('/hello', function(req, res){
    res.send("Hello World!");
 });
 
 app.post('/hiii', function(req, res){
    console("You just called the post method at '/hello'!\n");
 });
 
 app.listen(3000);

