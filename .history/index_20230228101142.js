const http = req(http);
const port = 5055;
const server = http.createServer((req, res) => {
    res.end("Hello");
});
server.l
