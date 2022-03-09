const jwt = require('jsonwebtoken')
let authentication = function (req, res, next) {
    let token = req.headers["x-auth-token"];
    if (!token) return res.send({ msg: "token must be present" });
    let decodededToken = jwt.verify(token, "shubham-chiku");
    if (!decodededToken)
        return res.send({ status: false, msg: "token is invalid" });
    next()
}
const authorisation =async function(req,res,next){
    let decodededToken = jwt.verify(req.headers["x-auth-token"],"shubham-chiku");
    if(decodededToken.userId != req.params.userId)return res.send({Warning: "you are not allowed to make changes in this data" })
    next()
}
module.exports.authentication = authentication;
module.exports.authorisation = authorisation;




// const authenticate = function(req, req, next) {
//     //check the token in request header
//     //validate this token

//     next()
// }


// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     next()
// }