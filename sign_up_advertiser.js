const Users=require('./models/advertiser');
const mongoco=require('./atlas_connect');

async function sign_up_advertiser(req,res){
    let _name=req.body.name;
    let _email=req.body.email;
    let _password=req.body.password;
    const filter={email:_email};
    console.log('out of the boucle');
    Users.findOne((filter),function(err,docs){
        console.log(_email);
        console.log(docs);

        if(docs!=null)  {
            res.send('email_already_exist');
           
        }
        else{

            console.log('in the boucle');
            const User1= new Users({
                name:_name,
                email:_email,
                password:_password
        });
        User1.save()
        .then((result)=>{})
        .catch((err)=>console.log(err)) ;
        res.send('Advertiser_Registred_succesfully');
            
        }
    });

        
      
    

    
}
module.exports.sign_up_advertiser=sign_up_advertiser;