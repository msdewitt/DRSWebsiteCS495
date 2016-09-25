(function() {
  'use strict';

  angular.module('drsApp', [
    // Angular modules
    'ui.router',

    // Third-party modules
    // 'firebase',

    // Custom modules
    // 'drsApp.home',
    'drsApp.layout',
  ])
  .config(configFunction)
  // .run(runFunction);

  // configFunction.$inject = ['$urlRouterProvider'];

  function configFunction($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  // runFunction.$inject = ['$rootScope', '$state'];
  //
  // function runFunction($rootScope, $state) {
  //   $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
  //     if (error === "AUTH_REQUIRED") {
  //       $state.go('login');
  //     }
  //   });
  // }
})();
