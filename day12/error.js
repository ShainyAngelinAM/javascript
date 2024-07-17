const express = require('express');
const app = express();
const port = 3000;

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
    throw new Error('BROKEN'); 
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
