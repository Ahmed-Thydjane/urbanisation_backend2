const mongoose=require('mongoose');



/*définition de structure des document*/

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: {type: String, required:true},
  password:{type:String, required:true},
  role:{type:Number, required:true},      /* 0=user  1=advertiser   2=admin */
  permission:{type:Number, required:true}/* 1=autorisé  -1=bloqué         */
},{timestamps : true });

const User = mongoose.model('User', userSchema);


/*Exportation des modele*/


module.exports=User;