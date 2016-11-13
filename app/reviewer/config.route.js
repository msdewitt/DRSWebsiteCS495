(function() {
  'use strict';

  angular
    .module('drsApp.reviewerApplication')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('reviewerApplication', {
      url: '/reviewerApplication',
      templateUrl: 'reviewer/reviewerApplication.html'
    });
  }
})();
