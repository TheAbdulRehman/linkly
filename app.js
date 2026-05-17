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
  if(req.url==='/about' && reqMethod==='GET'){
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify({about:'this is about page'}));
    res.end();
  }
   if(req.url==='/contact' && reqMethod==='GET'){
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify({contact:'this is contact page'}));
    res.end();
  }
   if(req.url==='/help' && reqMethod==='GET'){
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify({help:'this is help page'}));
    res.end();
  }
   if(req.url==='/services' && reqMethod==='GET'){
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify({services:'this is services page'}));
    res.end();
  }
   if(req.url==='/products' && reqMethod==='GET'){
    const status=res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify({products:[{title:'this is a product',
      description:'this is a product description'},
      {title:'this is another product',
        description:'this is another product description'  }],status,}));
    res.end();
  }
   if(req.url==='/blog' && reqMethod==='GET'){
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify({blog:'this is blog page'}));
    res.end();
  }
}


const server=http.createServer(getData);


server.listen(3000,(req,res)=>{
  // res.send('hello world');
  // res.end();
    console.log('server is running on port 3000');
})