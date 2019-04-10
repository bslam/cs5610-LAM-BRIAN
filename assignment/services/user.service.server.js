module.exports = function (app) {

  var userModel = require('./model/user/user.model.server');
  var websiteModel = require('./model/website/website.model.server');
  var pageModel = require('./model/page/page.model.server');
  var widgetModel = require('./model/widget/widget.model.server');

  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const FacebookStrategy = require('passport-facebook').Strategy;
  const bcrypt = require('bcrypt-nodejs');

  const localId = 381499992451385;
  const localSecret = "6b692e75c14aec0788ba413afb8cf9dc"

  const facebookConfig = {
    clientID: process.env.FB_CLIENT_ID || localId,
    clientSecret: process.env.FB_CLIENT_SECRET || localSecret,
    callbackURL: process.env.FB_CALLBACK_URL || '/auth/facebook/callback/',
  }


  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      function (user) {
        done(null, user);
      },
      function (err) {
        done(err, null);
      });
  }


  //api calls
  app.post('/api/user', createUser);
  app.get('/api/user', findUserByUsername);
  // app.get('/api/user', findUserByCredentials);
  app.get('/api/user/:uid', findUserById);
  app.put('/api/user/:uid', updateUser);
  app.delete('/api/user/uid', deleteUser);
  app.post("/api/login", passport.authenticate('local'), login);
  app.post("/api/logout", logout);
  app.post("/api/register", register);
  app.post("/api/loggedin", loggedin);
  app.get('/facebook/login', passport.authenticate('facebook', {scope: 'email'}));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/#/user',
    failureRedirect: '/#/login'
  }));


  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));


  function helloUser(req, res) {
    res.send("Hello from user service!");
  }

  function createUser(req, res) {
    console.log(req.body);
    userModel
      .createUser(req.body)
      .then(function (newUser) {
          console.log('Below is the newly created User');
          console.log(newUser);
          res.status(200).send(newUser);
        },
        function (error) {
          console.log("Below is the error in creating user");
          console.log(error);
          res.status(404);
        });
  }

  function findUserByCredentials(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    var user = req.body;
    // for (var i = 0; i < users.length; i++) {
    //   if (users[i].username === username && users[i].password === password) {
    //     res.status(200).send(users[i]);
    //     return;
    //   }
    // }
    // res.status(404).send("Credentials do not match any registered Users");
    userModel.findByCredentials(username, password).exec(
      function (err, user) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        console.log(user);
        return res.json(user);
      }
    );

  }

  function findUserByUsername(req, res) {
    const username = req.query["username"];
    userModel.findByUsername(username).then(function(user){
      res.send(user);
    }, function(error){
      res.status(400).send(error);
    })
  }

  // function findUserById(req, res) {
  //   var userId = req.params["uid"];
  //   for (var i = 0; i < users.length; i++)  {
  //     if (users[i]._id === userId) {
  //       res.status(200).send(users[i]);
  //       return;
  //     }
  //   }
  //   res.status(404).send("Id does not match any users");
  // }
  function findUserById(req, res) {
    var userId = req.params["userId"];
    userModel.findUserById(userId).exec(
      function (err, user) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(user);
      }
    );
  }

  function updateUser(req, res) {
    var userId = req.params["uid"];
    var user = req.body;
    userModel.updateUser
    // for (var i = 0; i < users.length; i++) {
    //   if (users[i]._id === userId) {
    //     users[i] = user;
    //     res.status(200).send(user);
    //     return;
    //   }
    // }
    // res.status(404).send("Unable to update User, ID does not match any users");
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);
    userModel.updateUser(userId, user).exec(
      function (err, user) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        console.log(user);
        return res.json(user);
      }
    );
  }

  function deleteUser(req, res) {
    var userId = req.params["uid"];
    // for (var i = 0; i < users.length; i++) {
    //   if (users[i]._id === userId) {
    //     users.splice(i,1);
    //     res.status(200).send(users);
    //     return;
    //   }
    // }
    // res.status(404).send("Unable to delete User, ID does not match any users");
    userModel.deleteUser(userId).exec(
      function (err, user) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        console.log(user);
        return res.json(user);
      }
    );
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel.findUserByFacebookId(profile.id)
      .then(
        function (user) {
          if (user) {
            console.log('Found User');
            console.log(user);
            return done(null, user);
          } else {
            const names = profile.displayName.split(" ");
            const newFacebookUser = {
              lastName: names[1],
              firstName: names[0],
              email: profile.emails ? profile.emails[0].value : "",
              facebook: {id: profile.id, token: token}
            };
            return userModel.createUser(newFacebookUser);
          }
        },
        function (err) {
          if (err) {
            return done(err);
          }
        });
  }

  // function facebookStrategy(token, refreshToken, profile, done){
  //   userModel.findUserByFacebookId(profile.id)
  //     .then(
  //       function(user) {
  //         if(user) {
  //           console.log('user');
  //           return done(null, user);
  //         } else {
  //           console.log('profile');
  //           var names = profile.displayName.split(" ");
  //           var newFacebookUser = {
  //             lastName: names[1],
  //             firstName: names[0],
  //             email: profile.emails ? profile.emails[0].value:"",
  //             facebook: { id: profile.id, token: token } };
  //           return userModel.createUser(newFacebookUser);
  //         }
  //       }, function(err) {
  //         if (err) {
  //           return done(err);
  //         } } );
  // }

  function localStrategy(username, password, done) {
    userModel.findByUsername(username).then(
      (user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      },
      (err) => {
        if (err) {
          return done(err, null);
        }
      }
    );
  }

  function login(req, res) {
    const user = req.user;
    res.json(user);
    // if(user && bcrypt.compareSync(password, user.password)) {
    //   return done(null, user);
    // } else {
    //   return done(null, false);
    // }
  }

  function logout(req, res) {
    req.logOut();
    // res.send(200);
    res.json({success: true});
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function register(req, res) {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .createUser(user)
      .then(
        function (newUser) {
          if (newUser) {
            req.login(user, function (error) {
              if (error) {
                res.status(400).send(error);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }
}
