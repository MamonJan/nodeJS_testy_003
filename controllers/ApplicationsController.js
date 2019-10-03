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
 // }).catch(function (){
 //     req.flash('form', 'Są problemy z danymi');
 //     res.redirect('/');
 // });


// }, function (){
//     //prosta obsługa po obietnicy
//     req.flash('form', 'Są problemy z danymi');
//     res.redirect('/');


    // req.flash('form', req.body.name.split(' ')[0] + ', you are a true hero!');
    // w zamian dodałem midlleware normalizeData, który modyfikuje nam to samo
    // req.flash('form', req.body.imie + ', you are a true hero!');
    // res.redirect('/');
    // res.json({
    //     'name': req.body.name,
    //     'phone': req.body.phone,
    //     'message': req.body.message
    // })
};

// midlleware
exports.normalizeData = (req, res, next) => {
    const nameArr = req.body.name.split(' ');

    req.body.imie = nameArr.shift();
    req.body.nazwisko = nameArr.join(' ');

    next();
}
