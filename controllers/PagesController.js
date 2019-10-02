exports.home = (req, res) => {
//    res.render('home')
    res.render('home', {
        formMessage: req.flash('form')
    });
};
