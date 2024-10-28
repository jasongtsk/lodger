/* GET home page */
const create = function(req, res){
    res.render('register', {
        title: 'Lodger',
        logo: 'Lodger'
    });
};

module.exports = {
    create
};