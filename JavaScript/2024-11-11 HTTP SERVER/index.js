const http = require("http");

// HTTP - Hyper Text Transfer Protocol
// HTTPS - Hyper Text Transfer Protocol Secure
http.createServer((request, response)=>{
    console.log(request.url)
    console.log(request.method)

    //GET ENPOINT /a
    if(request.url === "/a" && request.method === "GET")
    {
        response.write(JSON.stringify({data: "A"}));
    }
    // POST ENDPOINT /a
    else if(request.url === "/a" && request.method === "POST")
    {
        response.write(JSON.stringify({data: "A Post request got", }));
    }
    //GET ENPOINT /b
    else if(request.url === "/b" && request.method === "GET")
    {
        response.write(JSON.stringify({data: "B"}));
    }
    // other routes
    else{
        response.write("route not found");
    }

    response.end();
})
.listen(8080, () => {
    console.log('Sėkmingai paleistas serveris su prievadu 8080')
});
