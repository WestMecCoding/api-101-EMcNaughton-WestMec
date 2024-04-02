const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/myles', (req, res) => {
    res.send('<h1>Hello Myles</h1>');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})