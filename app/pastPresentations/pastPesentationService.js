var app = angular.module("PastPresApp", []);

app.service("pastPresService" function ($http, $q)
{
  var deffered = q.defer();
  $http.get('2014PresentationFile.json').then(function (data)
  {
    deffered.resolve(data);
  });

  this.getpastPresentations = function ()
  {
    return deffered.promise;
  }
})

.controller("PastPresCtrl", function ($scope, pastPresService)
{
  var promise = pastPresService.getpastPresentations();
  promise.then(function(data)
  {
    $scope.pres = data.data;
  });
})
