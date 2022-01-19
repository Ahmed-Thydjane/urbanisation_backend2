
const Users=require('./models/user');
const{sendError, sendMessage} = require("./message");

const mongoco=require('./atlas_connect');

/******************************************************************************/


function getAllUsers (req,res) {
	Users.find({})
		.then(resp => sendMessage(res,resp))
		.catch(error => sendError(res,error));
}



/*let result=getAllUsers();
console.log('Test')*/
module.exports.getAllUsers = getAllUsers; // on exporte la fonction

/******************************************************************************/

function deleteUser (_iduser) {
    Users.findByIdAndDelete(_iduser);
}
module.exports.deleteUser = deleteUser; // on exporte la fonction

/******************************************************************************/


function getUserId (_email) {


}
module.exports.getUserId = getUserId;
/*console.log(getUserId('abc@gmail.com'));*/
/******************************************************************************/


function getAdminId (_idadmin) {

}
module.exports.getAdminId = getAdminId

/******************************************************************************/


function getIdUser(_email){
    
}
module.exports.getIdUser = getIdUser;

/******************************************************************************/

function getIdAdmin(){
    ;
}
module.exports.getIdAdmin = getIdAdmin;

/******************************************************************************/

function getIdUser(){

    return Users.find({});
}
module.exports.getIdIdUser = getIdUser;

/******************************************************************************/

function isUserExistName(_email,_password){
    

}
module.exports.isUserExistName = isUserExistName;

/******************************************************************************/

function isAdminExistName(_email,_password){
  
}
module.exports.isAdminExistName = isAdminExistName;

/******************************************************************************/

function isAdminExistEmail(_email){
    
}
module.exports.isAdminExistEmail = isAdminExistEmail;

/******************************************************************************/


function  isUserExistEmail(_email){
    const filter={email: _email};
    console.log('1');
    Users.find(filter,function (err, docs) {
    console.log(docs);
   })
   
}
isUserExistEmail('abhhhhhhhc@gmail.com');
module.exports.isUserExistEmail = isUserExistEmail;

/******************************************************************************/

function insertUser(_nom,_prenom,_email,_password,_profil){

}
module.exports.insertUser = insertUser;

