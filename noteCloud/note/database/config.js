const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/note",{useNewUrlParser:true});

const db=mongoose.connection;
db.on("err",console.error.bind(console,"connection error"));
db.on("open",function(){
    console.log("connect success");
});
module.exports=db;
