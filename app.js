const http = require('http');
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
//res.setHeader('Content-Type', 'text/html');
res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
res.end('한글 연동확인확인 테스트테스트');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
