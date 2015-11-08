angular.module('Karela')
  .controller('NewTaskCtrl', function(TaskService, $state, $stateParams) {
    var newTaskCtrl = this;

    function init() {
      newTaskCtrl.project = ProjectService.find($stateParams.projectId);
      newTaskCtrl.initializeNewTask();
    };

    newTaskCtrl.initializeNewTask = function() {
      newTaskCtrl.newTask = {};
    };

    newTaskCtrl.addTask = function() {
      TaskService.create(
        newTaskCtrl.newTask.title, newTaskCtrl.newTask.description, newTaskCtrl.project
      );
      newTaskCtrl.initializeNewTask();
      $state.go('tasks')
    };

    init();
  });
