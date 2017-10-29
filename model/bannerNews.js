var request = require("request");

// var bannerNews = function(callback){
//     var options = {
//         url : "http://qt.qq.com/static/pages/news/phone/c13_list_1.shtml",
//         method : "GET",
//         headers:{
//             "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
//             "Accept-Encoding":"gzip, deflate",
//             "Accept-Language":"zh-CN,zh;q=0.8",
//             "Cache-Control":"max-age=0",
//             "Connection":"keep-alive",
//             "Host":"qt.qq.com",
//             "Upgrade-Insecure-Requests":"1",
//             "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
//         },
//         gzip:true
//     };
//     request(options , function(err,res,body){
//         if(err){
//             callback(true,"server error");
//             return;
//         }else{
//             var t = JSON.parse(body);
//             callback(false,t.list);
//         }
//     })
// };

// module.exports = bannerNews;

var bannerNews = function(callback){
    var options = {
        url:"http://lol.qq.com/web201310/js/videodata/TGP_INFO_RECOMMEND.js",
        method:"GET"
    };
    request(options,function(err,res,body){
        if(err){
            callback(true,"server error");
        }else{
            var start_index = body.indexOf("LWTGPRecommend=") + 15;
            var end_index = body.length - 1;
            var str = body.substring(start_index,end_index);
            var t = JSON.parse(str);
            for(item in t){
                t[item][0] = decodeURIComponent(t[item][0]);
                t[item][7] = decodeURIComponent(t[item][7]);
                t[item][9] = decodeURIComponent(t[item][9]);
            }
            callback(false,t);
        }
    });
};

module.exports = bannerNews;