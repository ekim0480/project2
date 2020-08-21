module.exports = function (sequelize, DataTypes) {
  var Brewery = sequelize.define("Brewery", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
      // validate: {
      //   len: [1],
      // },
    },
    website: {
      type: DataTypes.TEXT,
      allowNull: false,
      // validate: {
      //   len: [1],
      // },
    },
    tried: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  Brewery.associate = function (models) {
    Brewery.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Brewery;
};
