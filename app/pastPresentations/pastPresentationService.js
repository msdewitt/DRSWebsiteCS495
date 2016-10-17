
var app = angular.module('drsApp.pastPres')
app.controller('PastPresCtrl', function ($scope, $http)
{
  $http.get("pastPresentations/2014PresentationFile.json").then(function(response)
  {
    $scope.pastPresentations = response.data.presentations;
  });
});
