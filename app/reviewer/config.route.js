(function() {
  'use strict';

  angular
    .module('drsApp.application')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('application', {
      url: '/pastPres',
      templateUrl: 'reviewer/application.html'
    });
  }
})();
