module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    //   EXAMPLE TO FOLLOW ONCE TABLE STRUCTURE IS DECIDED UPON

    // title: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1],
    //   },
    // },
    // body: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   validate: {
    //     len: [1],
    //   },
    // },
    // category: {
    //   type: DataTypes.STRING,
    //   defaultValue: "Personal",
    // },
  });
  return Post;
};
