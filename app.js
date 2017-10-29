var express = require("express");
var app = express();

var userArea = require("./model/userArea.js");
var allHero = require("./model/allHero.js");
var freeHero = require("./model/freeHero.js");
var userHotInfo = require("./model/userHotInfo.js");
var userHonor = require("./model/userHonor.js");
var tierQueue = require("./model/tierQueue.js");
var bannerNews = require("./model/bannerNews.js");
var newstNews = require("./model/newstNews.js");
var combatList = require("./model/combatList.js");
var combatDetail = require("./model/combatDetail.js");
var heroDetail = require("./model/heroDetail.js");
var videoList = require("./model/videoList.js");

var port = process.env.PORT | 3333;

app.listen(port , function(){
    console.log("LOL start at post:" + port);
});

var json = function(res , err , result){
    if(err){
        res.jsonp({
          code : "1",
          statusTxt : "NO",
          data : result
        });
    }else{
        res.jsonp({
            code : "0",
            statusTxt : "OK",
            data : result,
        });
    }
};

app.all('*', function(req, res, next){
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

/*----- 通过名字检索玩家信息 -----*/
app.use("/UserArea",function(req,res){
    var keyword = req.query.keyword;
    try{
        userArea(keyword , function(err,result){
            json(res,err,result);
        });
    }catch(err){
        console.log(err);
    }
});

/*----- 获取所有英雄 -----*/
app.use("/Champion",function(req,res){
    try{
        allHero(function(err,result){
            json(res,err,result);
        });
    }catch(err){
        console.log(err);
    }
});

/*----- 获取周免英雄 -----*/
app.use("/Free",function(req,res){
    try{
        freeHero(function(err,result){
            json(res,err,result);
        });
    }catch(err){
        console.log(err);
    }
});

/*----- 获取英雄详细信息 -----*/
app.use("/HeroDetail",function(req,res){
    var championid = req.query.championid;
    try{
        heroDetail(championid,function(err,result){
            json(res,err,result);
        });
    }catch(err){
        console.log(err);
    }
});

/*----- 获取用户基本信息 -----*/
app.use("/UserHotInfo",function(req,res){
    var qquin = req.query.qquin;
    var areaid = req.query.areaid;
    try{
        userHotInfo(areaid , qquin , function(err,result){
            json(res,err,result);
        });
    }catch(err){
        console.log(err);
    }
});

/*----- 获取用户击杀数信息 -----*/
app.use("/UserHonor",function(req,res){
    var areaid = req.query.areaid;
    var qquin = req.query.qquin;
    try{
        userHonor(areaid , qquin , function(err,result){
            json(res,err,result);
        });
    }catch(err){
        console.log(err);
    }
});

/*-----获取段位信息 -----*/
app.use("/TierQueue",function(req,res){
    var tier = req.query.tier;
    var queue = req.query.queue;
    try{
        tierQueue(tier , queue , function(err,result){
            json(res,err,result);
        });
    }catch(err){
        console.log(err);
    }
});

/*----- 获取比赛列表信息 -----*/
app.use("/CombatList",function(req,res){
    var qquin = req.query.qquin,
        areaid = req.query.areaid;
    try{
        combatList(areaid, qquin ,function(err,result){
            json(res,err,result);
        });
    }catch(err){
        console.log(err);
    }
});

/*----- 获取比赛详细信息 -----*/
app.use("/CombatDetail",function(req,res){
    var areaid = req.query.areaid,
        qquin = req.query.qquin,
        gameid = req.query.gameid;
    try{
        combatDetail(areaid,qquin,gameid,function(err,result){
            json(res,err,result);
        });
    }catch(err){
        console.log(err);
    }
});

/*----- 获取资讯轮播图信息 -----*/
app.use("/BannerNews",function(req,res){
    try{
        bannerNews(function(err,result){
            json(res,err,result);
        });
    }catch(err){
        console.log(err);
    }
});

/*----- 获取资讯信息 -----*/
app.use("/NewstNews",function(req,res){
    var p = req.query.p;
    try{
        newstNews(p ,function(err,result){
            json(res,err,result);
        });
    }catch(err){
        console.log(err);
    }
});

/*----- 获取视频信息 -----*/
app.use("/VideoList",function(req,res){
    try{
        videoList(function(err,result){
            json(res,err,result);
        });
    }catch(err){
        console.log(err);
    }
});