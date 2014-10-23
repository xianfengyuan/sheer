var express = require('express');
var http = require('http');
var path = require('path');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var routes = require('./routes');
var clock = require('./routes/clock');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);
//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(express.logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.json());
app.use(methodOverride());
app.use(cookieParser('your secret here'));
//app.use(session());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/', clock.idate);

var server = app.listen(app.get('port'), function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
	  socket.emit('news', {hello: 'world'});
	  console.log('Received websocket connection.');

    setInterval(function(){
        socket.emit('date', {'date': new Date()});
    }, 1000);
});


    
