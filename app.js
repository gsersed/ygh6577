function decode_utf8(res) {
  return decodeURIComponent(escape(res));
}     // ↑ 추가해봐도 잘안됬습니다!!

const http = require('http');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>감사합니다</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
