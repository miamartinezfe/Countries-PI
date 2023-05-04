const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("activity", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      isAlpha:true, //solo permite letras
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificult: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        max:5,
        min:1,
      }
    },
    duration: {
      type: DataTypes.DECIMAL,
    },
    season: {
      type: DataTypes.ENUM('Winter','Spring','Autumn','Summer'),
      allowNull: false,
    },
  });
};