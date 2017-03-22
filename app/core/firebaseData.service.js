(function() {
  'use strict';

  angular
    .module('drsApp.core')
    .factory('firebaseDataService', firebaseDataService);

  function firebaseDataService() {
    var root = firebase.database().ref();
    var user = firebase.auth().currentUser;


    var service = {
      root: root,
      // texts: root.child('texts'),
       users: root.child('users'),
       emails: root.child('emails'),
       emails: root.child('users'),
       name: root.child('name'),
       //Required for reviewer and presenter applications below
       age: root.child('age'),
       expertise: root.child('expertise'),
       university: root.child('university'),
       mainAddress: root.child('mainAddress'),
       secondaryAddress: root.child('secondaryAddress'),
       aptNumber: root.child('aptNumber'),
       city: root.child('city'),
       state: root.child('state'),
       zip: root.child('zip'),
       cellNumber: root.child('cellNumber'),
       homePhone: root.child('homePhone'),


      //  accounts: root.child('accounts')




    };


    return service;
  }


})();
