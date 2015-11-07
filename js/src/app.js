angular.module('Karela', []);

angular.module('Karela')
  .controller('TasksCtrl', function() {
    var tasksCtrl = this;
    tasksCtrl.initializeNewTask = function() {
      tasksCtrl.newTask = {};
    };

    tasksCtrl.addTask = function() {
      tasksCtrl.tasks.push(tasksCtrl.newTask);
      tasksCtrl.initializeNewTask();
    };

    tasksCtrl.initializeNewTask();
    tasksCtrl.tasks = [];
  });
