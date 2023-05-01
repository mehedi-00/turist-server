const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const data = require('./data/data.json');
app.get('/', (req, res) => {
    res.json({ message: 'Hello Server is Running' });
});
app.get('/data', (req, res) => {
    res.send(data);
});
app.get('/data/:nameSlug', (req, res) => {
    const nameSlug = req.params.nameSlug;
    const selectedData = data.find(n => n.nameSlug === nameSlug);
    res.send(selectedData);
});

app.listen(port, () => {
    console.log(` API is running on port: ${port}`);
});