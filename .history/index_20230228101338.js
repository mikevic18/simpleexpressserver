const http = req(http);
const port = 30;
const server = http.createServer((req, res) => {
    res.end("Hello");
});
server.listen(port, () => console.log("Server Ready!"))
