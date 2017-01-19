(function() {
  'use strict';

  angular
    .module('drsApp.core')
    .factory('firebaseDataService', firebaseDataService);

  function firebaseDataService() {
    var root = firebase.database().ref();

    var service = {
      root: root,
      // texts: root.child('texts'),
       users: root.child('users'),
       emails: root.child('emails'),
       emails: root.child('users'),
       accounts: root.child('accounts'),




    };

    return service;
  }
})();
