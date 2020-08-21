// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
const { runInNewContext } = require("vm");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      console.log("req.user1 "+ req.user)
      // res.redirect("/members");
      // res.redirect("/index");
       res.redirect("/beersearch");
    }
    res.render("signup")
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      console.log("req.user2 "+ req.user)
      // res.redirect("/members");
      // res.redirect("/index");
       res.redirect("/beersearch");
    }
    res.render("login")
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
    
  // });
  app.get("/beersearch", isAuthenticated, function(req, res) {
    // req.user
    // res.render('search', {user: req.user})
    res.render("beersearch", {user:req.user})
  });

  app.get("/savedbrew", function(req, res){
    res.render("savedbrew");
  });
};
