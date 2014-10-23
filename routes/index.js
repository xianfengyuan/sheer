var fs = require('fs');

/*
 * GET home page.
 */

var bcss = '/css/bsv-default.css';
var additionalJavascript = ['/js/google.js'];
var additionalCss = ['/css/sheer.css'];

exports.index = function(req, res) {
    res.render('index', {title: 'Sheer Mountain', bcss: bcss, additionalJavascript : additionalJavascript, additionalCss : additionalCss});
};
