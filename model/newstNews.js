var request = require("request");
var iconv = require("iconv-lite");

var newstNews = function(p,callback){
    var options = {
        url : "http://qt.qq.com/php_cgi/news/php/varcache_getnews.php?id=12&page="+ p +"&plat=ios&version=33",
        method : "GET",
        headers:{
            "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Accept-Encoding":"gzip, deflate",
            "Accept-Language":"zh-CN,zh;q=0.8",
            "Cache-Control":"max-age=0",
            "Connection":"keep-alive",
            "Host":"qt.qq.com",
            "Upgrade-Insecure-Requests":"1",
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
        },
        gzip:true
    };
    request(options , function(err,res,body){
        if(err){
            callback(true,"server error");
            return;
        }else{
            var t = JSON.parse(body);
            if(t.next === 'True'){
                callback(false,t.list);
            }else{
                callback(true,"server error");
            }
        }
    })
};

module.exports = newstNews;