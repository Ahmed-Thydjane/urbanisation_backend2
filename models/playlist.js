const mongoose=require('mongoose');
const movies=require('./movie');


/*définition de structure des document*/

const playlistSchema= new mongoose.Schema({
    id_user:{type:String,required:true},
    title:{type:String,required:true},
    favorite:{type:Number},                      //* 0 if the playlist is favorite and 1 if the playlist is not fav
    videos:[{videoId:{type:String}}]   
},{timestamps : true });

/*Definition des model*/

const Playlist = mongoose.model('Playlist', playlistSchema);


/*Exportation des modele*/


module.exports=Playlist;