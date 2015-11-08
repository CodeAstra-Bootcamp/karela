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

    tasksCtrl.deleteTask = function(task) {
      var ind = tasksCtrl.tasks.indexOf(task);
      if (ind > -1) {
        tasksCtrl.tasks.splice(ind, 1);
        TaskService.delete(task.parseObject);
      }
    };

    init();
  });
