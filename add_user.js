const user=require('./models/user');
const mongoco=require('./atlas_connect');
const{sendError, sendMessage} = require("./message");

async function add_user(req,res){
    let email=req.body.email;
    let pass=req.body.password;
    let name=req.body.pseudo;


    const filter={"email":email,"password":pass}
    playlists.findOne((filter),function(err,docs){
        console.log(docs);

        if(docs!=null)  {
            return sendError(res,'user_already_exist');
        }
        else{
            
        }
    });

        
   
}
module.exports.add_user=add_user;
