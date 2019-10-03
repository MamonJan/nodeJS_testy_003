const Application = require('../models/application');

// Store new application
exports.store = (req, res, next) => {

    const application = Application.create({
        'name': req.body.imie,
        'phone': req.body.phone,
        'message': req.body.message
    }).then().then(function(){
        req.flash('form', req.body.imie + ', you are a true hero!');
        res.redirect('/');
    }).catch(next);

// midlleware
exports.normalizeData = (req, res, next) => {
    const nameArr = req.body.name.split(' ');

    req.body.imie = nameArr.shift();
    req.body.nazwisko = nameArr.join(' ');

    next();
}
