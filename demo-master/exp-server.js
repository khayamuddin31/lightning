var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.sendFile(__dirname+ "/" + "index.htm");
})
app.get('/demo', function (req, res) {
   res.sendFile(__dirname+ "/" + "myHtml.htm");
})

var server = app.listen(process.env.PORT || 8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});
