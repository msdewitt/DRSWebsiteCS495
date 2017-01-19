(function() {
  'use strict';

  angular
    .module('drsApp.core')
    .factory('accountService', accountService);

  accountService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function accountService($firebaseArray, firebaseDataService) {

    var accounts = null;

    var service = {
      account: account,
      accountsByUser: accountsByUser,
      reset: reset,
    };

    return service;

    ///////////////

    function account() {
      this.name = '';
      this.phone = '';
      this.topic = '';
      this.notified = false;
      this.complete = false;
    }

    function accountsByUser(uid) {
      if (!accounts) {
        accounts = $firebaseArray(firebaseDataService.users.child(uid).child('accounts'));
      }
      return accounts;
    }

    function reset() {
      if (accounts) {
        accounts.$destroy();
        accounts = null;
      }
      if(!accounts){
        accounts =
      $firebaseArray(firebaseDataService.users.child(uid).child('accounts'));
    }
    return accounts;
    }

    function reset(){
      if(accounts){
        accounts.$destroy();
        accounts = null;
      }
    }



  }
})();
