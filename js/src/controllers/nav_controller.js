angular.module('Karela')
  .controller('NavCtrl', function(AuthenticationService) {
    var navCtrl = this;

    navCtrl.loggedIn = AuthenticationService.loggedIn;
    navCtrl.logout = AuthenticationService.logout;
    navCtrl.username = function() {
      var currentUser = AuthenticationService.currentUser();
      if (currentUser) {
        return currentUser.get("username");
      } else {
        return ""
      }
    }
  });
