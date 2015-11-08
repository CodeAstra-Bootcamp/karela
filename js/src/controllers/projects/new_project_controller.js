angular.module('Karela')
  .controller('NewProjectCtrl', function(ProjectService, $state) {
    var newProjectCtrl = this;

    function init() {
      newProjectCtrl.initializeNewProject();
    };

    newProjectCtrl.initializeNewProject = function() {
      newProjectCtrl.newProject = {};
    };

    newProjectCtrl.addProject = function() {
      var project = ProjectService.create(
        newProjectCtrl.newProject.title, newProjectCtrl.newProject.description
      );
      newProjectCtrl.initializeNewProject();
    };

    init();
  });
