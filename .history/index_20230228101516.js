const http = require(http);
const port = 3000;
const server = http.createServer((req, res) => {
    res.end("Hello");
});
server.listen(port, () => console.log("Server Ready!"))
