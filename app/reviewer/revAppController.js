
angular.module('drsApp.reviewerApplication');
  app.controller('reviewAppController', reviewAppController);

  reviewAppController.$inject = ['$scope','$firebaseArray'];

  function reviewAppController($scope, $firebaseArray){
    var id = "";
    var users = firebase.database().ref("users");
    users.on('child_added', function(snapshot) {
    var message = snapshot.val();
    id = snapshot.key;

    // id = user.uid;
    // console.log(message + ": "+ id);
    });


  $scope.submitRevApp = function(users) {
    console.log("ID Key: "+ id);

    var user = firebase.auth().currentUser;


    var firebaseRef = firebase.database().ref();
    var userWithKey = firebase.database().ref("users/"+id);


//     console.log(firebaseRef.child("firstName"));
//     firebaseRef.child("firstName").set($scope.firstName); --
//     console.log("firstName: "+ $scope.firstName); --
//     firebaseRef.child("lastName").set($scope.lastName); --
//     console.log("lastName: "+ $scope.lastName); --
//     firebaseRef.child("university").set($scope.university); --
//     console.log("university"+ $scope.university); --
// //    firebaseRef.child("education").set($scope.education); --
//     console.log("education: "+ $scope.education); --
// //    firebaseRef.child("discipline").set($scope.discipline); --
//     console.log("discipline: "+ $scope.discipline); --
// //    firebaseRef.child("selectedExpertise").set($scope.selectedExpertise); --
//     console.log("selectedExpertise: "+ $scope.selectedExpertise); --
//     firebaseRef.child("streetAddress1: ").set($scope.streetAddress1); --
//     console.log("streetAddress1: "+ $scope.streetAddress1); --
//     firebaseRef.child("streetAddress2").set($scope.streetAddress2); --
//     console.log("streetAddress2: "+ $scope.streetAddress2); --
//     firebaseRef.child("apartmentNum: ").set($scope.apartmentNum); --
//     console.log("apartmentNum: "+ $scope.apartmentNum); --
//     firebaseRef.child("city").set($scope.city); --
//     console.log("city: "+ $scope.city); --
//     firebaseRef.child("state").set($scope.state); --
//     console.log("state: "+ $scope.state); --
//     firebaseRef.child("zip").set($scope.zip); --
//     console.log("zip: "+ $scope.zip); --
//     firebaseRef.child("phone1").set($scope.phone1); --
//     console.log("phone1: "+ $scope.phone1); --
//     firebaseRef.child("phone2").set($scope.phone2); --
//     console.log("phone2: "+ $scope.phone2); --
//     firebaseRef.child("email").set($scope.email); --
//     console.log("email: "+ $scope.email); --
console.log(userWithKey);



console.log("---------------------------------");
// console.log($scope.discipline);
// console.log($scope.education);
var specificUser = firebaseRef.child('users').child(id);
specificUser.set({
    name: ($scope.firstName + " " + $scope.lastName),
    aptNumber: ""+$scope.apartmentNum,
    university: $scope.university,
    // discipline: ""+$scope.selectedDiscipline,
    cellNumber: ""+ $scope.cell,
    city: $scope.city,
    // education: ""+$scope.selectedEducation,
    emailAddress: $scope.email,
    // expertise: $scope.selectedExpertise,
    homePhone: ""+$scope.home,
    mainAddress: $scope.mainAddress,
    secondaryAddress: $scope.secondaryAddress,
    state: $scope.state,
    zip: ""+$scope.zip
});




user.updateProfile({
  name: "Jane Q. User",
  cellNumber: "812-631-8962"
}).then(function() {
  // Update successful.
}, function(error) {
  // An error happened.
});

// userWithKey.set({
//   name: ($scope.firstName + " " + $scope.lastName),
//   aptNumber: $scope.apartmentNum,
//   university: "",
//   age: "",
//   cellNumber: "",
//   city: "",
//   emailAddress: "",
//   expertise: "",
//   homePhone: "",
//   mainAddress: "",
//   secondaryAddress: "",
//   state: "",
//   zip: "",
//
// }).then(function() {
//   // Update successful.
// }, function(error) {
//   // An error happened.
// });
//    reset();
  }

  $scope.reset = function() {
    // $scope.firstName = '';
    // $scope.lastName = '';
    // $scope.university = '';
    // $scope.education = '';
    // $scope.discipline = '';
    // $scope.expertise = '';
    // $scope.streetAddress1 = '';
    // $scope.streetAddress2 = '';
    // $scope.apartmentNum = '';
    // $scope.city = '';
    // $scope.state = '';
    // $scope.zip = '';
    // $scope.phone1 = '';
    // $scope.phone2 = '';
    // $scope.email = '';
  }

};
