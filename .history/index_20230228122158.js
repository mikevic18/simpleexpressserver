const express = require("express");
const app = express();
const port = 3000;
const { fruits, getFruit } = require("./fruits.js");

const getFruit = (fruitName) => {
    return fruits.find((fruit) => fruit.name.toLowerCase() == fruitName);
};

const getMaxId = () => {
    const ids = fruits.map((fruit) => fruit.id);
    return Math.max(...ids);
};

app.use(express.json());

app.get("/", (req, resp) => {
    resp.send("Hello World!");
});

app.get("/fruits", (req, resp) => {
    resp.send(fruits);
});

app.get("/fruits/:name", (req, resp) => {
    const result = getFruit(req.params.name.toLowerCase());
    if (result == undefined) resp.status(404).send();
    resp.send(result);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
app.post("/fruits", (req, resp) => {
    const fruit =
    const fruit = req.body;

    console.log(fruit);
    resp.send("New Fruit Created!");
});
