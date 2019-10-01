const express = require('express');
const DB = require('../db');
const router = express.Router();

const db = new DB();

router.get('/', (req, res)=>{
    res.render('home');
})

router.get('/piotr', function(req, res){
    res.send("Cześć Piotrek");
})

router.get('/db', (req,res)=>{
    console.log('Ktoś puścił bąka');
    res.send("");
})

router.post('/db', (req,res)=>{
    db.selectAll(req.query, function(row){
        res.json(row);
    });
})


module.exports = router;