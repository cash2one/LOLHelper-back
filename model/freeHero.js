var request = require("request");

var freeHero = function(callback){
    var options = {
        url : "http://lol.qq.com/biz/hero/free.js",
        method : "GET",
    };
    request(options , function(err,res,body){
        if(err){
            callback(true,"server error");
            return;
        }else{
            // console.log(body);
            var start_index = body.indexOf("free=") + 5;
            var end_index = body.indexOf(";/*");
            var str = body.substring(start_index,end_index);
            var t = JSON.parse(str);
            callback(false,t.data);
        }
    })
};

module.exports = freeHero;