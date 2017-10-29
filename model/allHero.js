var request = require("request");

var allHero = function(callback){
    var options = {
        url : "http://lol.qq.com/biz/hero/champion.js",
        method : "GET",
    };
    request(options , function(err,res,body){
        if(err){
            callback(true,"server error");
            return;
        }else{
            var start_index = body.indexOf("champion=") + 9;
            var end_index = body.length - 1;
            var str = body.substring(start_index , end_index);
            var t = JSON.parse(str);
            callback(false,t.data);
        }
    })
};

module.exports = allHero;

// var allHero = function(callback){
//     var options = {
//         url : "http://cdn.tgp.qq.com/lol/conf/LOLChampion.5c475a1c76add435a0f5b172f69224dc.js",
//         method : "GET",
//         gzip:true
//     };
//     request(options , function(err,res,body){
//         if(err){
//             callback(true,"server error");
//             return;
//         }else{
//             var start_index = body.indexOf("map=") + 4;
//             var end_index = body.indexOf(";if");
//             var str = body.substring(start_index,end_index);
//             callback(false,str);
//         }
//     })
// };

// module.exports = allHero;