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
      sendAuthEmail: sendAuthEmail,
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
    function sendAuthEmail(emailAddress){
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    }
    function sendPasswordResetEmail(user){
      auth.$sendPasswordResetEmail(user.email)

    }
  }
})();
