const mongoco=require('./atlas_connect');
const users=require('./models/user');
const{sendError, sendMessage} = require("./message");

async function modifyPermission(req,res){
    let id=req.body.id;
    let permission=req.body.permission;
    
    users.findById(id,function(err,docs){

        console.log(docs);
        if(docs==null){
            return sendError(res,'unexistant_users');
        }

        else{

            const update={"permission": permission};

            users.findByIdAndUpdate(id,update)
            .then(()=>{})
            .catch((err)=>console.log(err)) ;
            return sendMessage(res,'permission_updated_sucssesfullly');
            
        }
    });

    
}
module.exports.modifyPermission = modifyPermission;