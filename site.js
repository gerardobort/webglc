var express = require('express'),
    http = require('http');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
    console.log('Site server listening on port ' + app.get('port') + ' on ' + app.get('env') + ' env.');
});
