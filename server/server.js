var net = require('net');
var port = 11312;
var dataHash = {}

var server = net.createServer(function(connection) {
    console.log('Connection to %s open', port);
    
    connection.on('data', function(data) {
        var dataArray = String(data).trim().split(' ');
        if(dataArray[0].toUpperCase() == 'SET') {
            dataHash[dataArray[1]] = dataArray[2];
            connection.write("STORED");
        } else if(dataArray[0].toUpperCase() == 'GET') {
            connection.write("VALUE "+dataHash[dataArray[1]]);
        } else {
            connection.end('world\r\n');
            console.log('Connection to %s closed', port);
        }
    });
});
server.listen(port);


