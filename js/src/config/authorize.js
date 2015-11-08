angular.module('Karela')
  .run(function ($rootScope, $state, AuthenticationService) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
      if (toState.authenticate && !AuthenticationService.loggedIn()){
        $state.transitionTo("home");
        event.preventDefault();
      }
    });
  });
