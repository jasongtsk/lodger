/* GET home page */
const create = function(req, res){
    res.render('login', {
        title: 'Lodger',
        logo: 'Lodger'
    });
};

module.exports = {
    create
};