var request = require("request");

var heroDetail = function(championid,callback){
    var options = {
        url : "http://cdn.tgp.qq.com/lol/conf/heros/"+ championid +".js",
        method : "GET",
    };
    request(options , function(err,res,body){
        if(err){
            callback(true,"server error");
            return;
        }else{
            var start_index = body.indexOf("data:") + 5;
            var end_index = body.indexOf(",updated");
            var str = body.substring(start_index,end_index);
            str = str.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g, '$1"$3":');
            var t = JSON.parse(str);
            callback(false,t);
        }
    })
};

module.exports = heroDetail;