const mongoose =require("mongoose");

const schema= new mongoose.Schema({
       avatar:String,
       username:String,
       password:String,
       email:{
           type:String,
           required:true,
           unique:true,
       },
       desc:String,

},{versionKey:false,timestamp:{createdAt: 'createdTime',updateAt:'updateTime'}});

module.exports=mongoose.model("users",schema,"users");