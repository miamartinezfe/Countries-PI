const {Country} = require('../../db');

const getCountries = async function (){
    const countries = await Country.findAll();
    return countries;
}

module.exports = getCountries;