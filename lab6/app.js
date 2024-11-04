
const express = require('express');
const app = express();

app.get('/api/dogs', (req, res) => {
    res.json([
        { name: 'Bulldog', breed: 'Bulldog' },
        { name: 'Beagle', breed: 'Beagle' },
        { name: 'Poodle', breed: 'Poodle' }
    ]);
});

module.exports = app;
