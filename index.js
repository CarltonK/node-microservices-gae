const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const { method, path } = req;
    console.log(`Default server has received this request with method ${method} on the path ${path}`);
    res.status(200).send('This is the default service');
});

const port = 8080;
app.listen(port, () => console.log(`The default server is serving from localhost:${port}`));