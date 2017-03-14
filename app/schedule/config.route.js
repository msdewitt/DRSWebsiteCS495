(function() {
  'use strict';

  angular
    .module('drsApp.schedule')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('schedule', {
      url: '/schedule',
      templateUrl: 'schedule/schedule.html'
    });
  }
})();
