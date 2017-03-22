
var app = angular.module('drsApp.reviewerApplication');
  app.controller('educationController', educationController);

  function educationController($scope){
    $scope.degrees=[
      "Bachelor Degree",
      "Master Degree",
      "Doctorate Degree"
    ]
  };
