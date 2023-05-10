const {Country, Activity} = require('../../db');

const getCountries = async function (){
    const countries = await Country.findAll({
        include: Activity,
    });
    return countries;
}

module.exports = getCountries;