const express = require('express');

const app = express();

app.get('/credit', (req, res) => {
    const { method, path } = req;
    console.log(`Credit server has received this request with method ${method} on the path ${path}`);
    res.status(200).send('This is the credit service');
});

const port = 8080;
app.listen(port, () => console.log(`The credit server is serving from localhost:${port}`));