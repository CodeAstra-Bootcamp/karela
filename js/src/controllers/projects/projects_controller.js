angular.module('Karela')
  .controller('ProjectsCtrl', function(ProjectService) {
    var projectsCtrl = this;

    function init() {
      projectsCtrl.projects = [];
      fetchProjects();
    };

    function fetchProjects() {
      projectsCtrl.projects = ProjectService.fetch();
    };

    projectsCtrl.deleteProject = function(project) {
      var ind = projectsCtrl.projects.indexOf(project);
      if (ind > -1) {
        projectsCtrl.projects.splice(ind, 1);
        ProjectService.delete(project.parseObject);
      }
    };

    init();
  });
