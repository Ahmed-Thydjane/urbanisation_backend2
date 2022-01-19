const mongoco=require('./atlas_connect');
const users=require('./models/user');
const{sendError, sendMessage} = require("./message");

async function update_password(req,res){
    let id=req.body.id;
    let pass=req.body.newpassword;
    users.findById(id,function(err,docs){
        console.log(docs);
        if(docs==null){
            return sendError(res,'unexistant_users');
        }
        else{
            const update={"password":pass};    
            console.log('in the boucle');
            users.findByIdAndUpdate(id,update)
            .then(()=>{})
            .catch((err)=>console.log(err)) ;
            return sendMessage(res,'password_updated_sucssesfullly');
            
        }
    });

    
}
module.exports.update_password = update_password;