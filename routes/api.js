

cflp = require('cf-left-pad');

exports.leftpad = function ( req, res ){
    console.log(req.body);
    res.send(cflp(req.body.string2pad, req.body.len2pad, req.body.char2pad));
};
