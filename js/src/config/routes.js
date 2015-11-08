angular.module('Karela')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "views/home.tmpl.html",
        controller: "HomeCtrl",
        controllerAs: "homeCtrl",
        authenticate: false
      })
      .state('projects', {
        url: "/projects",
        templateUrl: "views/projects/index.tmpl.html",
        controller: "ProjectsCtrl",
        controllerAs: "projectsCtrl",
        authenticate: true
      })
      .state('newProject', {
        url: "/projects/new",
        templateUrl: "views/projects/new.tmpl.html",
        controller: "NewProjectCtrl",
        controllerAs: "newProjectCtrl",
        authenticate: true
      })
      .state('projects.tasks', {
        url: "/:projectId/tasks",
        templateUrl: "views/tasks/index.tmpl.html",
        controller: "TasksCtrl",
        controllerAs: "tasksCtrl",
        authenticate: true
      })
      .state('projects.newTask', {
        url: "/:projectId/tasks/new",
        templateUrl: "views/tasks/new.tmpl.html",
        controller: "NewTaskCtrl",
        controllerAs: "newTaskCtrl",
        authenticate: true
      });
  }]);
