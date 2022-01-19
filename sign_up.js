const Users=require('./models/user');
const mongoco=require('./atlas_connect');
const {sendError, sendMessage}= require("./message");

async function sign_up(req,res){
    let _name=req.body.name;
    let _email=req.body.email;
    let _password=req.body.password;
    let _role=req.body.role
    const filter={email:_email};
    console.log('out of the boucle');
    Users.findOne((filter),function(err,docs){
        console.log(_email);
        console.log(docs);

        if(docs!=null)  {
            return sendError(res,'email_already_exist');
           
        }
        else{

            console.log('in the boucle');
            const User1= new Users({
                name:_name,
                email:_email,
                password:_password,
                role:_role,
                permission:1
        });
        User1.save()
        .then(()=>{return sendMessage(res,'User_Registred_succesfully');})
        .catch((err)=>console.log(err)) ;
            
        }
    });

        
      
    

    
}
module.exports.sign_up=sign_up;