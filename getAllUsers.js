const mongoco=require('./atlas_connect');
const users=require('./models/user');
const{sendError, sendMessage} = require("./message");

async function getAllUsers(req,res){
    const docs=await users.find({},{password:0});
   
        if(typeof(docs)!== "undefined"){
            // on renvoie au format JSON la liste des cours demandés par l'utilisateur
            return sendMessage(res,[docs]);
        }else {
            return sendError(res,"No playlist yet")
        } 
}
module.exports.getAllUsers = getAllUsers;