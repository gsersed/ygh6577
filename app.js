const http = require('http');
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('<h1>한글 연동확인확인 테스트테스트</h1>');
});
server.listen(port,() => {
  console.log(`Server running at port `+port);
});
