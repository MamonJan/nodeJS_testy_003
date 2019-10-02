// Store new application
exports.store = (req, res) => {
    req.flash('form', req.body.name.split(' ')[0] + ', you are a true hero!');
    res.redirect('/');
    // res.json({
    //     'name': req.body.name,
    //     'phone': req.body.phone,
    //     'message': req.body.message
    // })
};