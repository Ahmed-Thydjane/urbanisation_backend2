const sessionJwt = require ('./sessionJWT');
const mongoco = require('./atlas_connect');
const Users = require('./models/user');
const Advertisers = require('./models/advertiser');
const Admins = require('./models/admin');

// ici, on récupère le contenu du cookie de session JWT.
// celui-ci contient le userId mais également des informations
// concernant sa date d'expiration.
function getSession (req) {
    return sessionJwt.decodeSessionCookie(req);
}
module.exports.getSession = getSession;


// cette fonction ajoute le cookie de session au headers du
// message qui sera renvoyé à Angular. Si le cookie actuel
// est "vieux", on en recrée ici un nouveau.
function setSessionCookie (req, res, session) {
    sessionJwt.createSessionCookie(req, res, session);
}
module.exports.setSessionCookie = setSessionCookie;


// fonction pour récupérer le userId provenant du cookie
// de session. Si ce dernier n'existe pas, on renvoie
// l'ID -1.
function getPayload(session) {
    if (typeof session.payload === 'undefined') return -1;
    return session.payload;
}
module.exports.getPayload = getPayload;


async function authenticate(req,res){
    console.log('++++++In authenticate+++++++++');
    const _email = req.body.email;
    const _password = req.body.password;
    const filter={email:_email,password:_password};
    console.log(_email);
    if(typeof(_email) !== "undefined" && typeof(_password) !== "undefined"){
        console.log('+++++++++++++In boucle if principale++++++++++++++++++');
        const data_user = await Users.findOne(filter);
        console.log(data_user);
        if(data_user !== null){
            console.log('+++++++++++++In boucle if user++++++++++++++++++');
            setSessionCookie(req,res,{iduser:data_user._id, email :_email,password: _password,pseudo:data_user.pseudo,status :"user" });
            return [data_user, "user"] ;

        }
        else return false;
    }else {
         return false;
    }
}
module.exports.authenticate = authenticate;

