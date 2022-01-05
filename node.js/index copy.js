var http = require("http");
let fs = require('fs')

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    console.log(request.url)
    if (request.url == '/profile.html') {
        fs.readFile('./profile.html', 'utf8', (err, data) => {
            console.log(data)
            response.end(data)
        })
    } else {
        response.write("<h1>Khuslens's Profile <a href=profile.html>Here</a><h1>");
        response.end()

    }
}).listen(1002);