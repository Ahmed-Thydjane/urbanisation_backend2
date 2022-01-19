const mongoose=require('mongoose');




/*définition de structure des document*/

const fav_movieSchema= new mongoose.Schema({
    id_origin:{type:String,required:true},
    source:{type:String}
},{timestamps : true });

/*Definition des model*/

const fav_movie = mongoose.model('fav_movie', fav_movieSchema);


/*Exportation des modele*/


module.exports=fav_movie;