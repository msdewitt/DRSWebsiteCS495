(function() {
  'use strict';

  angular
    .module('drsApp.auth')
    .factory('authService', authService);

  authService.$inject = ['$firebaseAuth', 'firebaseDataService'];

  function authService($firebaseAuth, firebaseDataService) {
    var auth = $firebaseAuth();

    var service = {
      auth: auth,
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      buildUserInfo: buildUserInfo,
      sendPasswordResetEmail: sendPasswordResetEmail,

    };

    return service;

    //////////////

    function register(user) {
      return auth.$createUserWithEmailAndPassword(user.email, user.password);
    }

    function login(user) {
      return auth.$signInWithEmailAndPassword(user.email, user.password);
    }

    function logout() {
      auth.$signOut();
    }
//     function TestCtrl($scope, $timeout) {
//     $scope.loading = true;
//     $timeout(function () {
//         $scope.loading = false;
//     }, 1000);
// }

    function isLoggedIn() {
      //  if(auth.$getCurrentUser() != null){
      //    return true
      //  }
      // return false;
            return auth.$getAuth();
    }
    function buildUserInfo(user){
      firebaseDataService.emails.push({
        name: user.name,
        emailAddress: user.email,
        age: user.age,
        expertise: user.expertise,
        university: user.university,
        mainAddress: user.mainAddress,
        secondaryAddress: user.secondaryAddress,
        aptNumber: user.aptNumber,
        city: user.city,
        state: user.state,
        zip: user.zip,
        cellNumber: user.cellNumber,
        homePhone: user.homePhone,
      });
    }
    function sendPasswordResetEmail(user){
      auth.$sendPasswordResetEmail(user.email)

    }
  }
})();
