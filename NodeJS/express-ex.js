const http = require('http')
const {readFileSync} = require('fs')

// get all files 

const homepage = readFileSync('./index.html');

const server = http.createServer((req,res) =>{
    console.log('user hit the server')
    console.log(req.method)
    console.log(req.url)

    res.writeHead(200,{'content-type':'text/html'})
    res.write(homepage)// all the response headers are sent, the server should consider this message complete
    res.end()
})

server.listen(5000)

//port - communication endpoint 80 -http, 20-ftp,443-https