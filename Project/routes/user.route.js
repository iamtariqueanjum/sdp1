var express = require('express');
var bodyParser = require('body-parser');
var User = require('../models/user.model');

var router = express.Router();
router.use(bodyParser.json());

router.get('/login',(req, res) => {
    res.redirect('/login')
});

router.get('/register',(req, res) => {
    res.redirect('/register')
});

router.post('/register', (req, res)=>{
    let user = new User({
        fullname: req.body.fullname,
        uname: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    });
    
    User.addUser(user, (err, result)=>{
        if(err){
            res.statusCode = 500;
            return res.json({success: false, message: err});
        }
        res.statusCode = 200;
        return res.json({success: true, message: result});
    });
});


router.post('/login', (req, res)=>{
    User.login(req.body.uname, req.body.password, (err, result)=>{
        if(err){
            res.statusCode = 500;
            return res.json({success: false, message: err});
        }
        res.statusCode = 200;
        return res.json({success: true, message: result});
    });
});


router.get('/logout', (req, res, next) => {
    if (req.session) {
      req.session.destroy();
      res.clearCookie('session-id');
      res.redirect('/');
    }
});

module.exports = router;