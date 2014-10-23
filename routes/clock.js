var async = require('async');

exports.idate = function(req, res) {
	  var js = ['/socket.io/socket.io.js', '/js/idate.js'];
	  var css = ['/css/stable.css'];
    res.render('clock/idate', {additionalJavascript: js, additionalCss: css});
};
