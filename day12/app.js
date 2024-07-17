const express = require('express');
const app = express();
const port = 3000;

const requestTime = (req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
};

app.use(requestTime);

app.get('/', (req, res) => {
    res.send(`Current time: ${req.requestTime}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
