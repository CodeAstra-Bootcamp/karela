angular.module('Karela')
  .controller('TasksCtrl', function(TaskService) {
    var tasksCtrl = this;

    function init() {
      tasksCtrl.initializeNewTask();
      fetchTasks();
    };

    tasksCtrl.initializeNewTask = function() {
      tasksCtrl.newTask = {};
    };

    function fetchTasks() {
      tasksCtrl.tasks = TaskService.fetch();
    };

    tasksCtrl.addTask = function() {
      tasksCtrl.tasks.push(tasksCtrl.newTask);
      TaskService.create(
        tasksCtrl.newTask.title, tasksCtrl.newTask.description
      );
      tasksCtrl.initializeNewTask();
    };

    init();
  });
