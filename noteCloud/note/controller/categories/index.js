const {Router} = require('express');
const router = Router();
const catagoryModel=require('../../database/model/categories');

router.get("/category",(req,res)=>{
    catagoryModel.find({}).then(data=>{
        res.json({
            code:200,
            msg:"查询成功",
            data,
        })
    })
});
router.get("/category/:id",(req,res)=>{ /**有问题类型转换错误    */
     let id=req.params.id;
     catagoryModel.findById({"ObjectId":_id}).then(data=>{
         res.json({
             code:200,
             msg:'查询成功',
             data
         })
     })
});
router.post("/add",(req,res)=>{
    let {name}=req.body;
    console.log(name);
    if(name)
    {
        catagoryModel.create({name}).then(data=>{
            res.json({
                code:200,
                msg:"添加成功",
                data,
            })
        })
    }
})
module.exports=router;