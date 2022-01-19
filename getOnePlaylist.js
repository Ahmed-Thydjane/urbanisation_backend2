const mongoco=require('./atlas_connect');
const playlists=require('./models/playlist');
const{sendError, sendMessage} = require("./message");

async function getOnePlaylist(req,res){
    console.log("outtttttttttttttttttttttttttttttttt");
    let _id_user=req.body.user_id;
    let _id_playlist=req.body.playlist_id;
    const filter={id_user:_id_user,_id:_id_playlist};
    playlists.find((filter),function(err,docs)
    {
        console.log("innnnnnnnnnnnnnnnnnnnn");
        if(typeof(docs)!== "undefined"){
            return sendMessage(res,docs);
        }else {
            return sendError(res,"No playlist yet")
        }
    });

    
}
module.exports.getOnePlaylist = getOnePlaylist;