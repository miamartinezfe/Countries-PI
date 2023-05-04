const {Country, Activity} = require('../../db');


const getCountry = async function (idPais){
    const countries = await Country.findByPk(idPais,{
        include: Activity
    });
    return countries;
}

module.exports = getCountry;