const mongoose=require("mongoose");
var Schema = mongoose.Schema;
const schema= new mongoose.Schema({
    title:{
        type:String,
    },
    contentHTML:String,
    contentText:String,
    category:{
        type:Schema.Types.ObjectId,
        ref:'categories'
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    readNumber:{
        type:Number,
        default:0
    },
    commonNumber:{
        type:Number,
        default:0,
    },

},{versionKey:false,timestamps:{createdAt:"createdTime",updateAt:"updateTime"}});

module.exports=mongoose.model("articles",schema,"articles");