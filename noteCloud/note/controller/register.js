const {Router} = require('express');
const router = Router();
const user=require("../database/model/user");
const isEmail=require("validator/lib/isEmail")


router.post("/",async (req,res,next)=>{

    console.log(req.body);

    let {username,password,email}=req.body;

    if(username&&password&&email)
    {
        try
        {
            let data= await user.findOne({email})
            console.log(data);
            if(data)
            {
                res.json({
                    code:401,
                    msg:"此邮箱已经注册过！"
                });
                return;
            }
            if(isEmail(email))
            {
                let avatarNumber=Math.ceil(Math.random()*9);
                let avatar=`http://pbl.yaojunrong.com/avatar${avatarNumber}.jpg`
                user.create({username,password,email,avatar}).then(data=>{
                    res.json({
                        code:200,
                        msg:"注册成功"
                    });
                })
            }else{
                res.json({
                    code:401,
                    msg:"邮箱的格式错误"
                })
            }
        }catch(err)
        {
            next(err);
            res.json({
                code:401,
                msg:"注册失败，缺少必要参数",
                err,
            })
        }
    }else
    {
        res.json({
            code:401,
            msg:"用户名/密码/邮箱为空"
        });
    }
});

module.exports=router;