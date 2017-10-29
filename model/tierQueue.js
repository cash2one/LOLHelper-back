var request = require("request");

var tierQueue = function(tier , queue , callback){
    var options = {
        url : "http://lol.apigod.com:8080/TierQueue?tier=" + tier + "&queue=" + queue,
        method : "GET",
        headers:{
            "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Accept-Encoding":"gzip, deflate",
            "Accept-Language":"zh-CN,zh;q=0.8",
            "Cache-Control":"max-age=0",
            "Connection":"keep-alive",
            "Host":"lol.apigod.com:8080",
            "Upgrade-Insecure-Requests":"1",
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
        }
    };
    request(options , function(err,res,body){
        if(err){
            callback(true,"server error");
            return;
        }else{
            var t = JSON.parse(body);
            if(t.retCode === 0){
                callback(false,{
                    data : t.data
                });
            }else{
                callback(true,t.msg);
            }
        }
    })
};

module.exports = tierQueue;