(function() {
  'use strict';

  angular
    .module('drsApp.drsLocationTime')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('drsLocationTime', {
      url: '/',
      templateUrl: 'drsLocationTime/drsLocationTime.html'
    });
  }
})();
