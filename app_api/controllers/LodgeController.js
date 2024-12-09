const mongoose = require('mongoose');
const Lodges = mongoose.model('lodge');

const lodgesList = async function (req, res) {
    let lodges = await Lodges
        .find();
    res.status(200).json(lodges);
}

module.exports = {
    lodgesList
};
