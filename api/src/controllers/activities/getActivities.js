const {Activity} = require('../../db');

const getActivities = async function (){
    const activities = await Activity.findAll();
    return activities;
}

module.exports = getActivities;