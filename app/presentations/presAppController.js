angular.module('drsApp.reviewerApplication');
  app.controller('presAppController', presAppController);

  presAppController.$inject = ['$scope','$firebaseArray'];

  function presAppController($scope, $firebaseArray){

  $scope.submitSubmissionApp = function() {
    var firebaseRef = firebase.database().ref();

    firebaseRef.child("firstName").set($scope.firstName);
    console.log("firstName: "+ $scope.firstName);
    firebaseRef.child("lastName").set($scope.lastName);
    console.log("lastName: "+ $scope.lastName);
    firebaseRef.child("university").set($scope.university);
    console.log("university"+ $scope.university);
//    firebaseRef.child("education").set($scope.selectedEducation);
    console.log("education: "+ $scope.selectedEducation);
//    firebaseRef.child("discipline").set($scope.selectedDiscipline);
    console.log("discipline: "+ $scope.seledtedDiscipline);
//    firebaseRef.child("selectedExpertise").set($scope.selectedExpertise);
    console.log("selectedExpertise: "+ $scope.selectedExpertise);
    firebaseRef.child("streetAddress1: ").set($scope.streetAddress1);
    console.log("streetAddress1: "+ $scope.streetAddress1);
    firebaseRef.child("streetAddress2").set($scope.streetAddress2);
    console.log("streetAddress2: "+ $scope.streetAddress2);
    firebaseRef.child("apartmentNum: ").set($scope.apartmentNum);
    console.log("apartmentNum: "+ $scope.apartmentNum);
    firebaseRef.child("city").set($scope.city);
    console.log("city: "+ $scope.city);
    firebaseRef.child("state").set($scope.state);
    console.log("state: "+ $scope.state);
    firebaseRef.child("zip").set($scope.zip);
    console.log("zip: "+ $scope.zip);
    firebaseRef.child("phone1").set($scope.phone1);
    console.log("phone1: "+ $scope.phone1);
    firebaseRef.child("phone2").set($scope.phone2);
    console.log("phone2: "+ $scope.phone2);
    firebaseRef.child("email").set($scope.email);
    console.log("email: "+ $scope.email);
    firebaseRef.child("keywords").set($scope.keywords);
    console.log("keywords: "+ $scope.keywords);
    firebaseRef.child("description").set($scope.description);
    console.log("description: "+ $scope.description);
    firebaseRef.child("abstract").set($scope.abstract);
    console.log("abstract: "+ $scope.abstract);
//    reset();
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
};

app.controller('educationController', educationController)
function educationController($scope){
  $scope.degrees=[
    "Bachelor Degree",
    "Master Degree",
    "Doctorate Degree"
  ]
};

app.controller('disciplineController', disciplineController)

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
