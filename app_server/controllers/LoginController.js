/* GET home page */
const passport = require("passport");

const index = function(req, res){
    res.render('login', {
        title: 'Lodger',
        logo: 'Lodger',
        user : req.user
    });
};

const store = function (req, res, next) {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
};

const destroy = function (req, res, next) {
        req.logout((err) => {
            if (err) {
                return next(err);
            }
        });
        req.session.save((err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/login');
        });
}

module.exports = {
    index, store, destroy
};