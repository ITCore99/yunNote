const {Router} = require('express');
const router =Router();
const user=require("../database/model/user");
const isEmail=require("validator/lib/isEmail");

router.post("/",(req,res)=>{

    let {password,email}=req.body;

    if(password&&email)
    {
        if(isEmail(email))
        {
            user.findOne({email}).then(data=>{
                if(data)
                {
                    if(data.password==password)
                    {
                        req.session.user=data; /**记录用户信息*/
                        console.log(req.session);
                        console.log(req.session.user);
                        res.json({
                            code:200,
                            msg:"登陆成功",
                            userInfo:{
                                "avatar":data.avatar,
                                "username":data.username,
                                "email":data.email,
                            }
                        })
                    }else
                    {
                        res.json({
                            code:401,
                            msg:"密码错误"
                        })
                    }

                }else
                {
                    res.json({
                        code:401,
                        msg:"此用户没有注册！"
                    });
                }
            })
        }else
        {
            res.json({
                code:401,
                msg:"邮箱格式不对"
            })
        }


    }else
    {
        res.json({
            code:401,
            msg:"邮箱/密码为空！"
        })
    }

});
module.exports=router;