const mongoose=require('mongoose');



/*définition de structure des document*/

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: {type: String, required:true},
  password:{type:String, required:true}
},{timestamps : true });



const Admin = mongoose.model('Admin', userSchema);


/*Exportation des modele*/


module.exports=Admin;