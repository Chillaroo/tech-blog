const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.get('/signup', async (req,res)=>{
    try {
        res.render('signup');
    }
    catch (err) {
        console.log(err);
        res.status.apply(500).json(err);
    }
});

router.get('/login', async (req,res)=>{
    try {
        res.render('login');
    }
    catch (err) {
        console.log(err);
        res.status.apply(500).json(err);
    }
});

router.get('/create', async (req,res)=>{
    try {
        res.render('create');
    }
    catch (err) {
        console.log(err);
        res.status.apply(500).json(err);
    }
});

module.exports = router;