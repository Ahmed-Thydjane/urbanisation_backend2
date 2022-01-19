const movies=require('./models/movie');
const playlists=require('./models/playlist')
const mongoco=require('./atlas_connect');
const{sendError, sendMessage} = require("./message");

async function add_new_movie(req,res){
   let _id_origin=req.body.videoId;
   let _id_playlist=req.body.id_playlist;
    console.log(_id_playlist);

    const filter={"_id":_id_playlist,"videos.videoId":_id_origin};
   
    const moviee={videoId:_id_origin};
  
     playlists.findOne((filter),function(err,docs){
        console.log(docs);

        if(docs!=null)  {
            return sendError(res,'movie_already_exist_in_the_playlist');
        }
        else{
            playlists.findById(_id_playlist,function(err,docs){
                console.log(docs);
                if(docs==null){
                    return sendError(res,'unexistant_play_list');
                }
                else{
                    const update={$push:{videos:{videoId:_id_origin}}};    
                    console.log('in the boucle');
                    playlists.findByIdAndUpdate(_id_playlist,update)
                    .then(()=>{})
                    .catch((err)=>console.log(err)) ;
                    return sendMessage(res,'Movie_Registred_succesfully');
                    
                }
            });
            
         }
    });

        
      
    

}
module.exports.add_new_movie=add_new_movie;
