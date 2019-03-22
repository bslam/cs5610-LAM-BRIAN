module.exports = function (app) {

  //api calls
  app.post('/api/user', createUser);
  //app.get('/api/user', findUserByUsername);
  app.get('/api/user', findUserByCredentials);
  app.get('/api/user/:uid', findUserById);
  app.put('/api/user/:uid', updateUser);
  app.delete('/api/user/uid', deleteUser);

  var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
  ];

  function helloUser(req, res) {
    res.send("Hello from user service!");
  }

  function createUser(req, res) {
    var user = req.body;
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === user["username"]) {
        res.status(404).send("This username is already exist.");
        return;
      }
    }

    user._id = Math.random().toString();
    users.push(user);
    res.json(user);
  }

  function findUserByCredentials(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        res.status(200).send(users[i]);
        return;
      }
    }
    res.status(404).send("Credentials do not match any registered Users");

  }

  function findUserById(req, res) {
    var userId = req.params["uid"];
    for (var i = 0; i < users.length; i++)  {
      if (users[i]._id === userId) {
        res.status(200).send(users[i]);
        return;
      }
    }
    res.status(404).send("Id does not match any users");
  }

  function updateUser(req, res) {
    var userId = req.params["uid"];
    var user = req.body;
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i] = user;
        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("Unable to update User, ID does not match any users");
  }

  function deleteUser(req, res) {
    var userId = req.params["uid"];
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users.splice(i,1);
        res.status(200).send(users);
        return;
      }
    }
    res.status(404).send("Unable to delete User, ID does not match any users");
  }

}

/**
createUser(user: User) {
    const new_user: User = new User(Math.random, user.username, user.password, '', '');
    this.users.push(new_user);
    return new_user;
  }

  findUserById(userId: String) {
    return this.users.find(function (user) {
      return user._id === userId;
    });
  }
  findUserByCredential(username: String, password: String) {
    return this.users.find(function (user) {
      return user.username === username && user.password === password;
    });
    /**for(const entry of this.users) {
      if (entry.username === username && entry.password === password) {
        return entry;
      }
    }
}
findUserByUsername(username: String) {
  return this.users.find(function (user) {
    return user.username === username;
  });
}
updateUser(userId, user) {
  for (const i in this.users) {
    if (this.users[i]._id === userId) {
      this.users[i].firstName = user.firstName;
      this.users[i].lastName = user.lastName;
    }
  }
}

deleteUser(userId: String) {
  for (const i in this.users) {
    if (this.users[i]._id === userId) {
      const j = +i;
      this.users.splice(j, 1);
    }
  }
}*/
