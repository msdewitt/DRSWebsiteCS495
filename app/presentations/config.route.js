(function() {
  'use strict';

  angular
    .module('drsApp.presentationSubmit')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('presentationSubmit', {
      url: '/presentationSubmit',
      templateUrl: 'presentations/presentationSubmit.html'
    });
  }
})();
