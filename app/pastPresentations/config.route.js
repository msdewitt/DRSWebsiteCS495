(function() {
  'use strict';

  angular
    .module('drsApp.pastPres')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('pastPres', {
      url: '/pastPres',
      templateUrl: 'pastPresentations/pastPres.html'
    });
  }
})();
