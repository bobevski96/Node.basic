import http from "http";
// import {writeToFile,readFromFile, appendToFile} from "./file-service.js";

const server = http.createServer((request, response) => {

    const url = request.url;
    const method = request.method;

    //When the default url is hit return HTML content to the user, the content of your choice.
    if(url === "/"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>Hello and welcome :)</h1>");
        response.end();
    };

    // -When the url /student is hit, return HTML with the informations: -Student name: "your name"; Student lastname: "your lastname"; 
    if(url === "/student"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>Name:Boban, LastName:Bobevski</h1>");
        response.end();
    };
    // -Academy: "the academy you are at"; -Subject: "the current subject we are learning";
    if(url === "/academy" && method === "GET"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>The current subject is Node.js-baisc :)</h1>");
        response.end();
    }


    server.listen(2000, () => {
        console.log("Server is live")
    })

})