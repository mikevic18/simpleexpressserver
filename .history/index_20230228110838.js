const express = require("express");
const app = express();
const port = 3000;
const fruits = require("./fruits.json");
app.get("/", (req, resp) => {
    resp.send("Hello World!");
});
app.get("/fruits", (req,resp) =>{
    resp.send(fruits);
})
app.ge
app.get("/elephant", (req, resp) => {
    resp.status(404).send()
});
app.get("/elephant/:name", (req, resp) => {
    resp.send(req.params);
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
