function encode_utf8(end) {
  return unescape(encodeURIComponent(end));
}

function decode_utf8(end) {
  return decodeURIComponent(escape(end));
}

const http = require('http');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>한글 연동확인확인 테스트테스트</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
