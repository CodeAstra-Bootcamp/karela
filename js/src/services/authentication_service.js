angular.module('Karela')
  .service('AuthenticationService', function($state, $q) {
    var AuthenticationService = this;

    AuthenticationService.login = function(username, password) {
      var differedQuery = $q.defer();
      Parse.User.logIn(username, password)
        .then(function (user) {
        	differedQuery.resolve(user);
        }, function (error) {
        	differedQuery.reject(error);
        });
      differedQuery.promise
        .then(function (user) {
          console.log("Logged in as " + user.get("username"));
          $state.go('tasks')
        })
        .catch(function (error) {
        	console.log("Error logging in: " + error.message);
        });
    };

    AuthenticationService.signup = function(username, password) {
      Parse.User.signUp(username, password, null, {
        success: function(user) {
          console.log("Signedup as " + user.get("username"));
        }, error: function(user, error) {
          console.log("Error signing up: " + error.message);
        }
      });
    };

    AuthenticationService.logout = function() {
      Parse.User.logOut().then(function() {
        $state.go('tasks');
      });
    };

    AuthenticationService.currentUser = function() {
      Parse.User.current();
    };

    AuthenticationService.loggedIn = function() {
      !!AuthenticationService.currentUser();
    };

    AuthenticationService.requireAuthentication = function() {
      if (AuthenticationService.loggedIn()) {
        return true;
      } else {
        $state.go('home');
      }
    }
  });
