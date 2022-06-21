const express = require('express');

const app = express();

app.get('/deposit', (req, res) => {
    const { method, path } = req;
    console.log(`Deposit server has received this request with method ${method} on the path ${path}`);
    res.status(200).send('This is the deposit service');
});

const port = 8080;
app.listen(port, () => console.log(`The deposit server is serving from localhost:${port}`));