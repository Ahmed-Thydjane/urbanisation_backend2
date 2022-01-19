const Ads=require('./models/Ads');
const mongoco=require('./atlas_connect');
const {sendError, sendMessage}= require("./message");

async function addAd(req,res){

    let _title=req.body.title;
    let _url=req.body.url;


     const ad= new Ads({
                title:_title,
                url:_url,
                permission: 1,
                
        });
        ad.save()
        .then(()=>{return sendMessage(res,'Ad_Registred_succesfully');})
        .catch((err)=>sendError(err)) ;


}
module.exports.addAd=addAd;