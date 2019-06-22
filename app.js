function encode_utf8(res) {
  return unescape(encodeURIComponent(res));
}

function decode_utf8(res) {
  return decodeURIComponent(escape(res));
}

const http = require('http');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>연동확인확인 테스트테스트</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
