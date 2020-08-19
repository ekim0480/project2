module.exports = function (sequelize, DataTypes) {
  var Beer = sequelize.define("Beer", {

    user: {
       type: DataTypes.TEXT,
       allowNull: false,
       validate: {
         len: [1,30]
       }
    },
    brewery_name: {
       type: DataTypes.TEXT,
       allowNull: false,
       validate: {
         len: [1],
       },
     },
     tried: {
       type: DataTypes.BOOLEAN,
       allowNull: false,
       defaultValue: false
     }
  });
  return Beer;
};