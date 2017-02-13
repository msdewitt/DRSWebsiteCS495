angular.module('revAppController', []);
  app.controller('reviewAppController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

  $scope.submitRevApp = function() {
    var firebaseRef = firebase.database().ref();

    firebaseRef.child("firstName").set($scope.firstName);
    firebaseRef.child("lastName").set($scope.lastName);
    firebaseRef.child("university").set($scope.university);
    firebaseRef.child("education").set($scope.education);
    firebaseRef.child("discipline").set($scope.discipline);
    firebaseRef.child("selectedExpertise").set($scope.selectedExpertise);
    firebaseRef.child("streetAddress1").set($scope.streetAddress1);
    firebaseRef.child("streetAddress2").set($scope.streetAddress2);
    firebaseRef.child("apartmentNum").set($scope.apartmentNum);
    firebaseRef.child("city").set($scope.city);
    firebaseRef.child("state").set($scope.state);
    firebaseRef.child("zip").set($scope.zip);
    firebaseRef.child("phone1").set($scope.phone1);
    firebaseRef.child("phone2").set($scope.phone2);
    firebaseRef.child("email").set($scope.email);
  }

  $scope.reset = function() {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.university = '';
    $scope.education = '';
    $scope.discipline = '';
    $scope.expertise = '';
    $scope.streetAddress1 = '';
    $scope.streetAddress2 = '';
    $scope.apartmentNum = '';
    $scope.city = '';
    $scope.state = '';
    $scope.zip = '';
    $scope.phone1 = '';
    $scope.phone2 = '';
    $scope.email = '';
  }

}]);
