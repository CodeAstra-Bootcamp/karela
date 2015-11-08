angular.module('Karela')
  .controller('TasksCtrl', function(TaskService, $stateParams) {
    var tasksCtrl = this;


    function init() {
      tasksCtrl.project = ProjectService.find($stateParams.projectId);
      tasksCtrl.tasks = [];
      fetchTasks();
    };

    function fetchTasks() {
      tasksCtrl.tasks = TaskService.fetch(tasksCtrl.project);
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
