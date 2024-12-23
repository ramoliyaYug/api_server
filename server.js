const express = require('express');

const app = express();
const port = 3000;

app.use(express.text());

let storedText = '';

app.post('/store', (req, res) => {
    storedText = req.body;
    res.send('Text stored successfully');
});

app.get('/retrieve', (req, res) => {
    res.send(storedText);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});