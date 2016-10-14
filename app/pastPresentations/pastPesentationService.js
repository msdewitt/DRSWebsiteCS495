var app = angular.module('PastPresApp', []);
app.controller('PastPresCtrl', function ($scope, $http)
{
  $http.get("2014PresentationFile.json").then(function(response)
  {
    $scope.pastPresentations = response.data.presentations;
  });
});
