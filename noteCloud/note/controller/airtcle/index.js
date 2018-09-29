const express=require('express');
const router=express.Router();
const aritcleModel =require("../../database/model/article")


router.post('/publish',(req,res)=>{

    if(req.session.user)
    {
        console.log(req.body);
        let {title,contentHTML,contentText,category}=req.body;
        contentText=contentText.substring(0,90)+".........";
        console.log(title,contentHTML,contentText,category);
        let author=req.session.user._id
        if(title&&contentHTML&&contentText&&category)
        {
            aritcleModel.create({title,
                contentHTML,
                contentText,
                category,
                author,
            }).then(data=>{
                res.json({
                    code:200,
                    msg:"插入成功",
                    data
                })
            })
        }else
        {
            res.json({
                code:400,
                msg:"缺少必要参数"
            })
        }
    }else
    {
        res.json({
            code:403,
            msg:"未登录不能发布文章"
        })
    }


});
router.get('/article',(req,res)=>{

    let {pn,size}=req.query;
    pn=parseInt(pn);
    size=parseInt(size);
    aritcleModel.find().skip((pn-1)*size).limit(size).sort({_id:-1}).populate({
        path:"category",
    }).populate({
        path:"author",
        select:'-password'
    }).then(data=>{
        res.json({
            code:200,
            data,
        });
    })

});
router.get('/article/:id',(req,res)=>{
    let {id}=req.params;
    aritcleModel.findById(id).populate({
        path:"author"
    }).then(data=>{
        res.json({
            code:200,
            data,
        });
    })
})
module.exports=router