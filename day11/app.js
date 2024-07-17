
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/submit', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Data received');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
