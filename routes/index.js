
/*
 * GET home page.
 */
cflp = require('cf-left-pad');
var results = ["none"];

exports.index = function(req, res){
  console.log(results);
  res.render( 'index', {
        title : 'LeftPad',
        results : results,
    });
};

exports.leftpad = function ( req, res ){
    console.log("request:"+req.body);
    results.push(cflp(req.body.string2pad, req.body.len2pad, req.body.char2pad));
    res.redirect( '/' );
};
