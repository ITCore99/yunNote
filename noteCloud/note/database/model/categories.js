const mongoose=require("mongoose");
const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
},{versionKey:false ,timestamps:{createdAt:"createdTime",updateAt:'updateTime'}});

module.exports=mongoose.model("categories",schema,"categories");