// importing http from node
const http=require('http');
const { title } = require('process');


const message={welcome:'hello world'};

const getData=(req,res)=>{
 const reqMethod= req.method;
  if(req.url==='/' && reqMethod==='GET'){
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(message));
    res.end();
  }
}


const server=http.createServer(getData);


server.listen(3000,(req,res)=>{
  // res.send('hello world');
  // res.end();
    console.log('server is running on port 3000');
})
