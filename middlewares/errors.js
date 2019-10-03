// exports.notFound = (req, res, next) => {
//     res.status(404).render('404');
// }

exports.notFound = (req, res, next) => {
   const err = new Error('Błąd 404: Strona nie istnieje');
   err.status = 404;
   next(err);
}

exports.catchErrors = (err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message
    })
}

