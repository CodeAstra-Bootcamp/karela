angular.module('Karela')
  .controller('NewTaskCtrl', function(TaskService, $state) {
    var newTaskCtrl = this;

    function init() {
      newTaskCtrl.initializeNewTask();
    };

    newTaskCtrl.initializeNewTask = function() {
      newTaskCtrl.newTask = {};
    };

    newTaskCtrl.addTask = function() {
      TaskService.create(
        newTaskCtrl.newTask.title, newTaskCtrl.newTask.description
      );
      newTaskCtrl.initializeNewTask();
      $state.go('tasks')
    };

    init();
  });
