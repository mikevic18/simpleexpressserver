const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, resp) => {
    resp.send("Hello World!");
});
app.get("/elephant", (req, resp) => {
    resp.send("Elephant!");
});
app.get("/elephant/:name", (req, resp) => {
    resp.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
