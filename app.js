const cors = require("cors");
const express = require("express");
const app = express();
const { fruits, getFruit, getMaxId } = require("./fruits");
const logInfo = require("./logger");

app.use(cors());
app.use(express.json());

app.get("/", (req, resp) => {
    resp.send(`Welcome to the fruit api`);
});

app.use("/fruits", (req, res, next) => {
    logInfo(req);
    next();
});

app.get("/fruits", (req, resp) => {
    resp.send(fruits);
});

app.get("/fruits/:name", (req, resp) => {
    const result = getFruit(req.params.name.toLowerCase());
    if (result == undefined) return resp.status(404).send();
    resp.send(result);
});

app.post("/fruits", (req, resp) => {
    if (getFruit(req.body.name) != undefined) {
        resp.status(409).send();
        return;
    }
    let maxId = getMaxId() + 1;
    req.body.id = maxId;
    fruits.push(req.body);
    resp.status(201).send(req.body);
});

app.delete("/fruits/:name", (req, res) => {
    const name = req.params.name.toLowerCase();
    const fruit = getFruit(name);
    const fruitIndex = fruits.indexOf(fruit);
    if (fruitIndex == -1) return res.status(404).send();
    fruits.splice(fruitIndex, 1);
    res.status(204).send();
});
module.exports = app;
