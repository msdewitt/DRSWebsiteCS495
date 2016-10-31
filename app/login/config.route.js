(function() {
  'use strict';

  angular
    .module('drsApp.login')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'login/login.html'
    });
  }
})();
