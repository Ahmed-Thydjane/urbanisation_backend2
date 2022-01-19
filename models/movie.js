const mongoose=require('mongoose');




/*définition de structure des document*/

const movieSchema= new mongoose.Schema({
    videoId:{type:String,required:true},
    source:{type:String}
},{timestamps : true });

/*Definition des model*/

const Movie = mongoose.model('Movie', movieSchema);


/*Exportation des modele*/


module.exports=Movie;