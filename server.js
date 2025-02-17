const http = require('http'),
      fs   = require('fs'),
      port = 3000


let cssFile
fs.readFile('./bulma.min.css', function(err, content) {
	cssFile = content
}) 

let file
const submitFileData = function(response, file) {
   fs.readFile(file, function(err, content) {
     file = content
     response.end(content, 'utf-8')
   })
}

const server = http.createServer(function(request, response) {
  switch(request.url) { 
    case '/bulma.min.css':
      response.writeHead(200, {"Content-Type": "text/css"});
      response.write(cssFile);
    case '/':
      submitFileData(response, 'index.html')
      break
    default:
      response.end('404 Error: File Not Found')
  }
}) 

server.listen(process.env.PORT || port)





