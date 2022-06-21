const express = require('express');

const app = express();

app.get('/withdrawal', (req, res) => {
    const { method, path } = req;
    console.log(`Withdrawal server has received this request with method ${method} on the path ${path}`);
    res.status(200).send('This is the withdrawal service');
});

const port = 8080;
app.listen(port, () => console.log(`The withdrawal server is serving from localhost:${port}`));