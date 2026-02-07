const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("Subscribe to SSJB Forbid to get a badass mommy Esdeath!! <3")
        res.end();
    }

     if(req.url === "/source-code") {
        res.write("You got noting bitch!! all the waifus are mine alone!!! lol")
        res.end();
    }
});

const PORT = 3000
server.listen(PORT, () => {
    console.log(`You are in the server port : ${PORT}`)
})