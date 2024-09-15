// const sessionIdUserMap = new Map(); //for sateful auth
const jwt = require('jsonwebtoken');
const secret = "AMAR12344";

function setUser(user){
    return jwt.sign({
        _id:user.id,
        email:user.email
    },secret)
    // sessionIdUserMap.set(id,user); //for stateful
}
function getUser(token){
     try{

        console.log(jwt.verify(token,secret));
        return jwt.verify(token,secret);

     }catch(e){
        return null;
     }
    // return sessionIdUserMap.get(id);
}

module.exports = {
    setUser,
    getUser,
}