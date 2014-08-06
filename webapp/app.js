/**
 * Created by admin on 30-Jul-14.
 */

"use strict";

var http = require('http'),
    express = require('express'),
    app = express(),
    bodyText = 'Hello Connect',
    server = http.createServer(app);

app.get('/', function (request, response) {
    response.send("Hello Express");
});

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

app.configure('development', function () {
    app.use(express.logger());
    app.use(express.errorHandler({
        dumpExceptions : true,
        showStack : true
    }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

server.listen(3000);
console.log(
    'Express server listening on port %d in %s mode',
    server.address().port, app.settings.env
);
