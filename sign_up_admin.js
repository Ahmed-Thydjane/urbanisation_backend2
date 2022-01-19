const Users=require('./models/admin');
const mongoco=require('./atlas_connect');

async function sign_up_admin(req,res){
    let _name=req.body.name;
    let _email=req.body.email;
    let _password=req.body.password;
    let _role=req.body.role;
    let _permission=req.body.permission;
    const filter={email:_email};
    console.log('out of the boucle');
    const docs= await Users.findOne((filter),{});

        if(docs!=null)  {
            res.send('email_already_exist');
           
        }
        else{

            console.log('in the boucle');
            const User1= new Users({
                name:_name,
                email:_email,
                password:_password,
                role:_role,
                permission:_permission
        });
        User1.save()
        .then((result)=>{ res.send('Admin_Registred_succesfully');})
        .catch((err)=>console.log(err)) ;
        
            
    }
    

        
      
    

    
}
module.exports.sign_up_admin=sign_up_admin;