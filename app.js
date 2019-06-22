app.get('/', function(req, res){

  //req.session.message = 'Hello World';

  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  res.write("welcome입니다");

  res.end();

});
