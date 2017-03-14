angular.module('drsApp.reviewerApplication');
  app.controller('presAppController', presAppController);

  reviewAppController.$inject = ['$scope','$firebaseArray'];

  function presAppController($scope, $firebaseArray){

  $scope.submitSubmissionApp = function() {
    var firebaseRef = firebase.database().ref();

    firebaseRef.child("firstName").set($scope.firstName);
    console.log("firstName: "+ $scope.firstName);
    firebaseRef.child("lastName").set($scope.lastName);
    console.log("lastName: "+ $scope.lastName);
    firebaseRef.child("university").set($scope.university);
    console.log("university"+ $scope.university);
  }
};
