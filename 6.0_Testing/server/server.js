const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'todo'
    });
});

app.get('/users', (req, res) => {
    res.send([
        { name: 'Max', age: 26 },
        { name: 'Cyril', age: 27 }
    ]);
});

app.listen(3000);

module.exports.app = app;