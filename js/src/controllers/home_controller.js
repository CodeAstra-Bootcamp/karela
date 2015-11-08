angular.module('Karela')
  .controller('HomeCtrl', function(TaskService, $state, AuthenticationService) {
    var homeCtrl = this;

    function init() {
      redirectIfLoggedIn();
      homeCtrl.initializeForms();
    };

    function redirectIfLoggedIn() {
      if (AuthenticationService.loggedIn()) {
        $state.go('tasks');
      }
    };

    homeCtrl.initializeForms = function() {
      homeCtrl.loginUser = {};
      homeCtrl.signupUser = {};
    };

    homeCtrl.login = function() {
      var username = homeCtrl.loginUser.username,
          password = homeCtrl.loginUser.password;
      AuthenticationService.login(username, password);
    };
    homeCtrl.signup = function() {
      var username = homeCtrl.signupUser.username,
          password = homeCtrl.signupUser.password;
      AuthenticationService.signup(username, password);
    };

    init();
  });
