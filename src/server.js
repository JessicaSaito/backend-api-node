/* const http = require('node:http');
const fs = require('fs')

const hostname = 'localhost';
const port = 3100;

const server = http.createServer((req, res) => {
  console.log('URL: ' + req.url)
  if(req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('src/views/index.html', (error, codigo) => {
      res.end(codigo);
    })
  } else if(req.url === '/cursos'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('src/views/cursos.html', (error, codigo) => {
      res.end(codigo);
    })
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/


const express = require('express')
const app = express()
const port = 3100

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})