const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.render('index.ejs');
});
router.get('/user',(req,res)=>{
    res.render('user.ejs');
});


module.exports = router;

