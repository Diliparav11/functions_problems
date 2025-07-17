// let http = require("http");

// let server = http.createServer((request, response)=>{

//     response.write("<h1> Hi Welcome to my server </h1>")
//     response.end()
    
// })
// server.listen(3000)


let http = require("http");

let server = http.createServer((request, response)=>{
    console.log(request.url);

    if (request.url == "/home"){
        response.write("<h1>  Welcome to my Home page </h1>")
    }
    else if (request.url == "/contact"){
        response.write("<h1>  Welcome to my Contact page </h1>")
    }
    else if (request.url == "/about"){
        response.write("<h1>  Welcome to my About page </h1>")
    }
    else{
        response.write("<h1> Hi Welcome to my Web Server </h1>")
    }
    response.end();

})
server.listen(3000)