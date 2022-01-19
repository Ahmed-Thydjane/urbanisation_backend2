const playlists=require('./models/playlist');
const mongoco=require('./atlas_connect');
const users=require('./models/user');
const{sendError, sendMessage} = require("./message");

async function add_new_playlist(req,res){
    
   let _id_user=req.body.id_user;
   let _title=req.body.title;
    users.find({"id":_id_user},function(err,docs){
        if(typeof(docs)==! "undefined"){
            return sendError(res,'Unexistant_user_id');
        }
        else{
            const filter={id_user:_id_user,title:_title};
    playlists.findOne((filter),function(err,docs){
        console.log(docs);

        if(docs!=null)  {
             return sendError(res,'playlist_name_already_exist');
        }
        else{

            console.log('in the boucle');
            const playlist1= new playlists({
                id_user:_id_user,
                title:_title,
                
        });
        playlist1.save()
        .then((result)=>{})
        .catch((err)=>console.log(err)) ;
        return sendMessage(res,'playlist_Registred_succesfully');
            
        }
    });

            
        }

    

   });
   
    
    
        
      
    

    
}
module.exports.add_new_playlist=add_new_playlist;