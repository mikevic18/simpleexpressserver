const express = require("express");
const app = express();
const port = 3000;
const {fruits,getFruit} = require("./fruits.js");
const getFruit = (fruitName) =>{
    return fruits.find(fruit => fruit.name.toLowerCase() == name)
}
app.use(express.json())
app.get("/", (req, resp) => {
    resp.send("Hello World!");
});
app.get("/fruits", (req,resp) =>{
    resp.send(fruits);
})
app.get("/fruits/:name",(req,resp)=>{
    
    if(fruit == undefined) resp.status(404).send()
    resp.send(fruit)
})
app.get("/elephant", (req, resp) => {
    resp.status(404).send()
});
app.get("/elephant/:name", (req, resp) => {
    resp.send(req.params);
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
app.post("/fruits",(req,resp) =>{
    const fruit = req.body;
    console.log(fruit)
    resp.send("New Fruit Created!")
})
