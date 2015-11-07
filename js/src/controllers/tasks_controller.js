angular.module('Karela')
  .controller('TasksCtrl', function(TaskService) {
    var tasksCtrl = this;

    function init() {
      tasksCtrl.tasks = [];
      fetchTasks();
    };

    function fetchTasks() {
      tasksCtrl.tasks = TaskService.fetch();
    };

    init();
  });
