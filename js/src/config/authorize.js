angular.module('Karela')
  .run(function ($rootScope, $state, AuthenticationService) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
      if (toState.authenticate && !AuthenticationService.loggedIn()){
        // debugger
        // User isn’t authenticated
        $state.transitionTo("home");
        event.preventDefault();
      }
    });
  });
