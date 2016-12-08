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
       users: root.child('users')

    };

    return service;
  }
})();
