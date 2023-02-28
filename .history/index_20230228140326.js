const express = require("express");
const app = express();
const port = 3000;
const {fruits} = require("./fruits.js");

const getFruit = (fruitName) => {
    return fruits.find((fruit) => fruit.name.toLowerCase() == fruitName);
};

const getMaxId = () => {
    const ids = fruits.map((fruit) => fruit.id);
    return Math.max(...ids);
};

app.use(express.json());
app.delete("/fruits/:name",(req,res)=> {
    const name = req.
})
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
    if(getFruit(req.body.name) != undefined) {
        resp.status(409).send();
        return;
    } 
    let maxId = getMaxId() + 1;
    req.body.id = maxId;
    fruits.push(req.body)
    resp.status(201).send(req.body);
});
