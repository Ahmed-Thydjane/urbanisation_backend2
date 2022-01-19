const mongoose=require('mongoose');



/*définition de structure des document*/

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: {type: String, required:true},
  password:{type:String, required:true}
},{timestamps : true });

const videoSchema= new mongoose.Schema({
    title:{type:String,required:true},
    url:{type: String}
},{timestamps : true });

const adSchema=new mongoose.Schema({
  name: String,
  im: String,
  url:{type: String, }
},{timestamps : true });

/*Denoition des model*/

const Users = mongoose.model('Users', userSchema);
const Advertiser = mongoose.model('Advertiser', userSchema);
const Admin = mongoose.model('Admin', userSchema);
const Video = mongoose.model('Video', videoSchema);
const Ads = mongoose.model('Ads', adSchema);


/*Exportation des modele*/


module.exports.Users=Users;