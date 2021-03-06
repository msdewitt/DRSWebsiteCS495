(function() {
  'use strict';

  angular
    .module('drsApp.auth')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('register', {
      url: '/register',
      templateUrl: 'auth/register.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'auth/login.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
    $stateProvider.state('reset_password', {
      url: '/login/reset_password',
      templateUrl: 'auth/reset.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
  }
})();
