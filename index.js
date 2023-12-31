const express = require('express');
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5111;

app.use(cors());

const allToysData = require("./JSON/toysData.json");
const All = require("./JSON/allToysData.json");
const blog = require("./JSON/blog.json");
const myToys = require("./JSON/myToys.json");

app.get('/', (req, res) => {
    res.send('Toys Galactico Server');
});

app.get('/toysData', (req, res) => {
    res.send(allToysData);
});

app.get('/toysData/:id', (req, res) => {
    const toysId = parseInt(req.params.id);
    let toysData;
    for (const category of allToysData) {
        toysData = category.vehicles.find(toy => toy.id === toysId);
        if (toysData) {
            break;
        }
    }
    if (toysData) {
        res.send(toysData);
    } else {
        res.status(404).send('Data not found in this URL');
    }
});

app.get('/all', (req, res) => {
    res.send(All);
});
app.get('/blog', (req, res) => {
    res.send(blog);
});
app.get('/myToys', (req, res) => {
    res.send(myToys);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
