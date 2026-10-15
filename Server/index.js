const http = require("http")

//http ik module hai server bnanay ka
//.creteserver hmare liyae ik webserver bna day ga
//ab hmare pass handler hona chaie jo hamari incoming request ko handle kar sake
//calbackfuntion hai hamri incoming request ko handle karne k liye
//callback kay pas do parameter hotay req or res 
//jab bhi koi call ati hai ya koi requet ati hai to infuction ko run krae ga
//ab is server ko run krnay kay liye hma ik port ki zaroort parti hai port  number ki

const myServer = http.createServer((req,res) => {
    console.log(res)
        res.end("hello from server again")
    }); ``
   //console.log("New req rec.");
    //console.log("req.headers")
    //res.end("hello from Server")
myServer.listen(8000, () => console.log("Server started"))















/*


Q1. Why do we use http.createServer()?
Good start

Your answer: “It make a server where we send request and response.”
What you understood correctly: It is related to creating a server that handles requests and responses.
What needs correction: The client sends the request to the server. The server handles that request and sends a response back.
Improved interview answer
http.createServer() creates an HTTP server and accepts a callback function that handles incoming requests and sends responses.
Senior tip: A server doesn't send a request to itself in this example. The browser or another client sends the request to it.

Q2. What is the difference between req and res?
Needs improvement

Your answer: “In HTTP we send req and get res.”
What you understood correctly: You understand that requests and responses are connected.
What is missing: You need to explain what information each object contains and what it lets the server do.
Improved interview answer
- req (request) contains information sent by the client, such as the URL, HTTP method and headers.
- res (response) is used by the server to set the response status, headers and body, and send the response to the client.
Remember this simple flow:
Client → req → Server → res → Client


Q3. What happens for an unhandled /contact route?
Incorrect for our example

Your answer: “Error.”
Not necessarily. A server does not automatically crash just because a URL is unknown.
In our previous code, the else block handles unrecognized routes:
res.statusCode = 404;
res.end("Route not found");


Correct answer
The server sends an HTTP 404 Not Found status and the message Route not found, because /contact does not match any defined route.
Senior tip: A missing route and a server crash are different things. Learn to distinguish HTTP errors from application errors.
*/