const http = require('http')

// const server = http.createServer((req, res) => {
//     res.write("Welcome to our homepage");
//     res.end();
// })

// server.listen(5000);


const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end("Welcome to our home page");
    }else if(req.url === '/about') {
        res.end("This is our short history");
    }else {
        res.end(`<h1>Ooops!!</h1>
            <p>We can't seem to find the page you're looking for</p><a href="/">Back home</a>`)
    }
})

server.listen(5000);