const {Router} = require('express');
const router = Router();
const login=require('./login');
const register=require('./register');
const logout=require('./logout');
const category=require('./categories/index');
const article=require('./airtcle/index');

router.use("/login",login);
router.use("/reg",register);
router.use('/out',logout);
router.use('/gory',category);
router.use('/art',article);
module.exports = router;
