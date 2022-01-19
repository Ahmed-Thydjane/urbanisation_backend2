const mongoose=require('mongoose');

const adSchema=new mongoose.Schema({
  title: { type: String, required: true},
  url:{type: String,required: true },
  Permission:{type: Number, required: true}
},{timestamps : true });

/*Denoition des model*/

const Ads = mongoose.model('Ads', adSchema);


/*Exportation des modele*/

module.exports=Ads;