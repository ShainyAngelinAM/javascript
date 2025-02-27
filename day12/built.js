const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
