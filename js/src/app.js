angular.module('Karela', []);

angular.module('Karela')
  .controller('TasksCtrl', function($scope) {
    var tasksCtrl = this;
    Parse.initialize("LWQ5NTjZA9AHKAI1VrWAFvsform7e2n56aUwZRi9", "YMNbi9lMYaaU27A4r1ra2QB1TKewfoxFEwelezoc");
    var Task = Parse.Object.extend("Task");

    tasksCtrl.initializeNewTask = function() {
      tasksCtrl.newTask = {};
    };

    function fetchTasks() {
      var query = new Parse.Query(Task);

      query.find({
        success: function(data) {
          tasksCtrl.tasks = [];
          angular.forEach(data, function(obj) {
            task = {};
            task.title = obj.get("title");
            task.description = obj.get("description");
            tasksCtrl.tasks.push(task);
            $scope.$apply();
          });
        }, error: function(data, error) {
          console.log("Error fetching tasks: " + error.message);
        }
      });
    };

    tasksCtrl.addTask = function() {
      tasksCtrl.tasks.push(tasksCtrl.newTask);

      var task = new Task();
      task.set("title", tasksCtrl.newTask.title);
      task.set("description", tasksCtrl.newTask.description);
      task.save({
        success: function(obj) {
          console.log("Task saved successfully");
        },
        error: function(obj, error) {
          console.log("Error saving task: " + error.message);
        }
      });
      tasksCtrl.initializeNewTask();
    };

    tasksCtrl.initializeNewTask();
    fetchTasks();
  });
