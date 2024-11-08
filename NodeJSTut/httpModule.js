const http = require('http');

const server = http.createServer((req, res) =>{
    //res.end("hello from server");
    if(req.url === '/'){
        res.end('This is home page');
    }
    else if(req.url === '/about'){
        res.end('This is about page');
    }
    else if(req.url === '/contact'){
        res.end('This is contact page');
    }
    else{
        res.end('404 - page not found');
    }
})

const listenServer = () =>{
    console.log("Server received the request");
}

server.listen(5000, (err) =>{
    if(err){
        console.log(err);
    }
    else{
        listenServer();
    }
});