const authorModel = require("../models/authorModel.js");
const getAuthor= async function (req,res){
    try {
const userId = req.params.userId

if (!userId) {
  return res.status(400).send({status:false,message:"Please provide a valid user id"})
  
}

const user = await authorModel.findOne({_id:userId})

if (!user) {

  return res.status(404).send({status:false, message: "No user found according to your seearch"})
  
}

if (user.isDeleted==true) {

  return res.status(400).send({status:false, message:"user has already been deleted"});
  
}

return res.status(200).send({status:true, message: "user details found", data:user})
      
    } catch (error) {

        res.status(500).send({status:false,message:err.message})
        
    }
}

module.exports.getAuthor = getAuthor;