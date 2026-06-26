// importing http from node
import http = require('http');
import type { IncomingMessage, ServerResponse } from 'http';

const message = { welcome: 'hello world' };

const getData = (req: IncomingMessage, res: ServerResponse) => {
  const reqMethod = req.method;
  if (req.url === '/' && reqMethod === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(message));
    res.end();
  }
};

const server = http.createServer(getData);

server.listen(3000, () => {
  console.log('server is running on port 3000');
});
