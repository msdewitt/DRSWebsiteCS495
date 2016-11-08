(function() {
  'use strict';

  angular
    .module('drsApp.signup')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('signup', {
      url: '/signup',
      templateUrl: 'signUp/signup.html'
    });
  }
})();
