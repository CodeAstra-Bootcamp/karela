angular.module('Karela')
  .service('TaskService', function($q, AuthenticationService){
    var TaskService = this;

    TaskService.taskClass = Parse.Object.extend("Task");

    TaskService.create = function(title, description, project) {
      var task = new TaskService.taskClass();
      task.set("title", title);
      task.set("description", description);
      task.set("user", AuthenticationService.currentUser());
      task.set("project", project);
      task.save({
        success: function(obj) {
          console.log("Task saved successfully");
        },
        error: function(obj, error) {
          console.log("Error saving task: " + error.message);
        }
      });
    };

    TaskService.delete = function(taskObj) {
      taskObj.destroy({
        success: function() {
          console.log('Delete task successfully');
        }, error: function(error) {
          console.log('Error deleting task: ' + error.message);
        }
      });
    };

    TaskService.fetch = function(project) {
      TaskService.tasks = [];
      var differedQuery = $q.defer();
      var query = new Parse.Query(TaskService.taskClass);
      query.equalTo("project", project);
      query.find().then(function (data) {
      	differedQuery.resolve(data);
      }, function (error) {
      	differedQuery.reject(error);
      });
      differedQuery.promise
        .then(function (data) {
          angular.forEach(data, function(obj) {
            task = {};
            task.title = obj.get("title");
            task.description = obj.get("description");
            task.parseObject = obj;
            TaskService.tasks.push(task);
          });
        })
        .catch(function (error) {
        	console.log("Error fetching tasks: " + error.message);
        });

      return TaskService.tasks;
    };
  });
