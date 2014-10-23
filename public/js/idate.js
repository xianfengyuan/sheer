//refresh data every 10 seconds
var interval = 10000;
var params = {};

var socket = io.connect('http://' + window.location.hostname);
socket.on('news', function(data) {
	  console.log(data);
});

/*
function requestData(socket, params) {
	  document.getElementById('requeststatustime').innerHTML = 'Data requested at ' + new Date();
	  socket.emit('requeststatus', {params: params});
}
*/

function handleDataResponse(data, socket) {
    document.getElementById('rxtime').innerHTML = data.date;
}

socket.on('date', function(data) {
	  handleDataResponse(data, socket);
//	  document.getElementById('requestreceivedtime').innerHTML = 'Data received at ' + new Date();	
});

/*
window.onload = function() {
    var rxtime = document.getElementById('rxtime').innerHTML;
    
    params = { account: account, id: id };
    requestData(socket, params);

    setInterval(function() {
        requestData(socket, params);
    }, interval);
};
*/
