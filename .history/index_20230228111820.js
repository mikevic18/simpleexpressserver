const express = require("express");
const app = express();
const port = 3000;
const {fruits,getFruit} = require("./fruits.js");

app.get("/", (req, resp) => {
    resp.send("Hello World!");
});
app.get("/fruits", (req,resp) =>{
    resp.send(fruits);
})
app.get("fruits/:name",(req,resp)=>{
    resp.send(getFruit())
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
