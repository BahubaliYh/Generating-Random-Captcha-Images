var http = require('http');
var lib_1= require('./lib_1');
var lib_2= require('./lib_2');
var file_content= require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'utf8'
    });
    res.end('<h1>Hello World<h2>\n');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');
lib_1.welcomeNote();
lib_2.welcomeNote();
file_content.readFile('sample_login.html','utf8', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data);
});
