angular.module('Karela')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "views/home.tmpl.html",
        controller: "HomeCtrl",
        controllerAs: "homeCtrl"
      })
      .state('tasks', {
        url: "/tasks",
        templateUrl: "views/tasks/index.tmpl.html",
        controller: "TasksCtrl",
        controllerAs: "tasksCtrl"
      })
      .state('newTask', {
        url: "/tasks/new",
        templateUrl: "views/tasks/new.tmpl.html",
        controller: "NewTaskCtrl",
        controllerAs: "newTaskCtrl"
      });
  }]);
