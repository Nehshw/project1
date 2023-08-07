const blogModel = require("../models/blogModel.js");
const getBlog = async function (req,res) {
  try {
    const data = req.body;
    if (!data.authorId) {
      return res
       .status(400)
       .send({status: false,msg:"Blog Author is required feild"});
    }

    const getAllBlog = await blogModel.find({authorId:data.authorId});
    res
       .status(200)
       .send({status:true,messege: "Blog Found successfully",data: getAllBlog});
  } catch (error) {
    return res.status(500).send({messege:error.messege});

  }
};

module.exports.getBlog = getBlog;