const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    console.log(req.session)
    console.log(req.session.user);
    if(req.session.user)
    {
        req.session.user=null;
        res.json({
            code:200,
            msg:'退出登录成功'
        })
    }else
    {
        res.json({
            code:403,
            msg:'此账号未登录或已失效'
        })
    }
});
module.exports=router;
