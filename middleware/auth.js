// const jwt = require( 'jsonwebtoken' );
// const { model } = require('mongoose');

// const auth = (req,res,next)=>{
//     const token = req.headers.authorization?.split(" ")[1]
//     if(token){
//         const decoded = jwt.verify(token,"masai")
//         if(decoded){
//             next()
//         }
//         else{
//             res.send({"msg":"you are not authorised"})
//         }
//     }
//     else{
//         res.send({"msg":"you are not authorised"})
//     }
// }

// module.exports={
//     auth
// }


const jwt = require('jsonwebtoken');
const { UserModel } = require('../model/user.model');

const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).send({ msg: "Unauthorized, no token provided" });
    }

    try {
        const decoded = jwt.verify(token, "masai");
        if (!decoded) {
            return res.status(403).send({ msg: "Unauthorized, token is invalid" });
        }

        // Check if user exists and is admin
        const user = await UserModel.findById(decoded.userId);
        if (!user || !user.isAdmin) {
            return res.status(403).send({ msg: "Unauthorized, only admins can perform this action" });
        }

        
        req.user = user;
        next();
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
};

module.exports = {
    auth
};
