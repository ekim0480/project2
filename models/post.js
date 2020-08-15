module.exports = function (sequelize, DataTypes) {
  var Beer = sequelize.define("Beer", {
    //   EXAMPLE TO FOLLOW ONCE TABLE STRUCTURE IS DECIDED UPON

    id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
  
    },
    brewery_name: {
       type: DataTypes.TEXT,
       allowNull: false,
       validate: {
         len: [5],
       },
     },
     tried: {
       type: DataTypes.BOOLEAN,
       defaultValue: false,
     }
  });
  return Beer;
};
