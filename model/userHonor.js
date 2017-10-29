var request = require("request");

var userHonor = function(areaid , qquin , callback){
    var options = {
        url : `http://api.pallas.tgp.qq.com/core/tcall?p=[[29,{"area_id":"${areaid}","qquin":"${qquin}","top_mvp_type":0,"top_champion_num":3}],[28,{"area_id":"${areaid}","qquin":"${qquin}"}],[31,{"area_id":"${areaid}","qquin":"${qquin}"}]]`,
        method : "GET",
        headers:{
            "Accept":"image/sharpp,*/*",
            "Accept-Encoding":"gzip, deflate",
            "Accept-Language":"zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.5;q=0.4",
            "Cache-Control":"max-age=0",
            "Connection":"keep-alive",
            "Host":"api.pallas.tgp.qq.com",
            "Referer":`http://game.tgp.qq.com/lol/profile/v1602/honor.html?qquin=${qquin}&area_id=${areaid}`,
            "Cookie":"ukey=U8956209106952878615; RK=PcFyORpuZ3; eas_sid=M1w5E0T1O6y7I4C1s9u5l3o259; pgv_pvi=7991587840; tgp_ticket=395A1C62DBA736400D183298716BAD36EA3ADF0327B3274A20F55BB84FA676D6F2EABD145AE2B3AB2D96A7E8BD9673035717F52E00029C5C64D244611199CB9E8EDE03B2A2C4F8E6A2AD62485FFDABF05D2D022767A03352CFD68204C0FC2C1E; pgv_si=s7406613504; session_token=FR74EZbqRA713K5DeJLNK33rcWmzRFtHFrE+u0e1b4c=; pt2gguin=o0976056569; uin=o0976056569; skey=@tUP9s2Mx4; ptisp=ctc; ptcz=908ae60f5e1b3869b95cf3df78c2eabac75001dbb42c1ce42aab766c790f1403; pgv_info=ssid=s4648849920; pgv_pvid=6173274293; puin=976056569; pkey=000159867314007048E2348E1FCE92E7A13C5B8EBDB1C67B5997C5CE0BD2F6ADA2BD0140D6FF62FED70D37B97EC405204C8C0E64C027B4A4D6144A7F4DB16F9492A1CC2F29DFAFB1D38F4A377068E7F90BDA31E1BF92E7FB01E3108CC00D4F35B735751200E1E0E87E4C6575FC709C72114A712340775066",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36 qblink tgp_daemon.exe QBCore/3.43.549.400 QQBrowser/9.0.2524.400"
        },
        gzip:true
    };
    request(options , function(err,res,body){
        if(err){
            callback(true,"server error");
            return;
        }else{
            var t = JSON.parse(body);
            if(t.retCode === 0){
                callback(false,t.data);
            }else{
                callback(true,t.msg);
            }
        }
    })
};

module.exports = userHonor;