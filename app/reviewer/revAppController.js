
var app = angular.module('drsApp.reviewerApplication');
  app.controller('reviewAppController', reviewAppController);

  app.controller('expertiseController', expertiseController);

  app.controller('disciplineController', disciplineController);

  app.controller('educationController', educationController);

  reviewAppController.$inject = ['$scope','$firebaseArray'];

  function reviewAppController($scope, $firebaseArray){
    var id = "";
    var user = firebase.auth().currentUser;
    var users = firebase.database().ref("users");

    users.orderByChild('uid').equalTo(user.uid).on('child_added', function(snapshot) {

    var message = snapshot.val();
    id = snapshot.key;
    // id = user.uid;
    // console.log(message + ": "+ id);
    });


  $scope.submitRevApp = function(users) {
    console.log("ID Key: "+ id);




    var firebaseRef = firebase.database().ref();




//
// console.log($scope.discipline);
// console.log($scope.education);
var specificUser = firebaseRef.child('users').child(id);
var admin = specificUser.child('admin');
if(specificUser.child('presenter') == true){
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
    zip: ""+$scope.zip,
    reviewer: true,
    presenter: true,
    admin: admin,
    uid: user.uid

});
}else{
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
      zip: ""+$scope.zip,
      reviewer: true,
      presenter: false,
      admin: admin,
      uid: user.uid

  });
};



//
// user.updateEmail($scope.email);

};
};

function educationController($scope){
  $scope.degrees=[
    "Bachelor Degree",
    "Master Degree",
    "Doctorate Degree"
  ]
};


function disciplineController($scope){
  $scope.disciplines=[
    "Agriculture",
    "Anthropology",
    "Applied Mathematics",
    "Archaeology",
    "Architecture and design",
    "Area studies",
    "Arts",
    "Biology",
    "Business",
    "Chemistry",
    "Computer sciences",
    "Cultural and ethnic studies",
    "Divinity",
    "Earth sciences",
    "Economics",
    "Education",
    "Engineering and technology",
    "Environmental studies and forestry",
    "Family and consumer science",
    "Formal sciences",
    "Gender and sexuality studies",
    "Geography",
    "Human history",
    "Human physical performance and recreation",
    "Humanities",
    "Intelligence",
    "Journalism, media studies and communication",
    "Law",
    "Library and museum studies",
    "Linguistics",
    "Literature",
    "Logic",
    "Mathematics",
    "Medicine",
    "Military sciences",
    "Natural sciences",
    "Philosophy",
    "Physics",
    "Political science",
    "Psychology",
    "Public administration",
    "Public policy",
    "Pure Mathematics",
    "Religion",
    "Social sciences",
    "Social work",
    "Sociology",
    "Space sciences",
    "Statistics",
    "Systems science",
    "Transportation",
    "Other"
  ]
};


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
