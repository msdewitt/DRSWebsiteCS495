angular.module('drsApp.reviewerApplication');
  app.controller('expertiseController', expertiseController)

  function expertiseController($scope){
    $scope.expertises=[
      "Access and success of underrepresented groups",
      "Campus climate and inter-group relations",
      "Community Outreach",
      "Education and scholarship",
      "Institutional viability and vitality",
      "Interdisciplinary research on diversity and interdisciplinary topics",
      "Mentoring",
      "Privilege, power, marginalization, discrimination, and difference",
      "Research",
      "Scholarship",
      "Teaching",
      "---OTHER (SPECIFY):"
    ]
  };
