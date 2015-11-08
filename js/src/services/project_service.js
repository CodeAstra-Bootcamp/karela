angular.module('Karela')
  .service('ProjectService', function($state, $q, AuthenticationService){
    var ProjectService = this;

    ProjectService.projectClass = Parse.Object.extend("Project");

    ProjectService.create = function(title, description) {
      var project = new ProjectService.projectClass();
      project.set("title", title);
      project.set("description", description);
      project.set("user", AuthenticationService.currentUser());
      project.save({
        success: function(obj) {
          console.log("Project saved successfully");
          $state.go('projects.newTask', {projectId: obj.id});
        },
        error: function(obj, error) {
          console.log("Error saving project: " + error.message);
        }
      });
    };

    ProjectService.delete = function(projectObj) {
      projectObj.destroy({
        success: function() {
          console.log('Delete project successfully');
        }, error: function(error) {
          console.log('Error deleting project: ' + error.message);
        }
      });
    };

    ProjectService.find = function(projectId) {
      ProjectService.project = {};
      var differedQuery = $q.defer();
      var query = new Parse.Query(ProjectService.projectClass);
      query.equalTo("objectId", projectId);
      query.first().then(function (data) {
      	differedQuery.resolve(data);
      }, function (error) {
      	differedQuery.reject(error);
      });
      differedQuery.promise
        .then(function (data) {
          ProjectService.project = data;
        })
        .catch(function (error) {
        	console.log("Error fetching projects: " + error.message);
        });

      return ProjectService.project;
    };

    ProjectService.fetch = function() {
      ProjectService.projects = [];
      var differedQuery = $q.defer();
      var query = new Parse.Query(ProjectService.projectClass);
      query.equalTo("user", AuthenticationService.currentUser());
      query.find().then(function (data) {
      	differedQuery.resolve(data);
      }, function (error) {
      	differedQuery.reject(error);
      });
      differedQuery.promise
        .then(function (data) {
          angular.forEach(data, function(obj) {
            project = {};
            project.title = obj.get("title");
            project.description = obj.get("description");
            project.parseObject = obj;
            ProjectService.projects.push(project);
          });
        })
        .catch(function (error) {
        	console.log("Error fetching projects: " + error.message);
        });

      return ProjectService.projects;
    };
  });
