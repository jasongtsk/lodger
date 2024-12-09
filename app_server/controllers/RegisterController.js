var passport = require('passport');
var User = require('../models/user');

const create = function(req, res){
    res.render('register', {
        title: 'Lodger',
        logo: 'Lodger'
    });
};

const store = function(req, res) {
    User.register(new User({username: req.body.username}), req.body.password, function (err, user) {
        if (err) {
            return res.render('register', {user: user});
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
};

module.exports = {
    create, store
};