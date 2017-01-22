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

    };

    return service;

    //////////////

    function register(user) {
      firebaseDataService.names.push({
        Name: user.name
      });
      return auth.$createUserWithEmailAndPassword(user.email, user.password);
    }

    function login(user) {
      return auth.$signInWithEmailAndPassword(user.email, user.password);
    }

    function logout() {
      auth.$signOut();
    }

    function isLoggedIn() {
      if(auth.$currentUser() != null){
        return true;
      }else{
      return false;
      }
    }
    function sendAuthEmail(emailAddress){
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    }
  }
})();
