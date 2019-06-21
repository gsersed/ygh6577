function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}
//utf-8

const http = require('http');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>연동확인</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
