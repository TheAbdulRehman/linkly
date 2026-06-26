
const http = require("http");

const requestHandler = async (req:any, res:any) => {
 
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end();
};

http.createServer(requestHandler).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});