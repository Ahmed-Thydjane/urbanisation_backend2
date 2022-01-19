const mongoco=require('./atlas_connect');
const Ads=require('./models/Ads');
const{sendError, sendMessage} = require("./message");

async function getAllAds(req,res){
    const docs=await Ads.find({});
   
        if(typeof(docs)!== "undefined"){
           
            return sendMessage(res,[docs]);
        }else {
            return sendError(res,"Erreur sur la collection ads")
        } 
}
module.exports.getAllAds = getAllAds;