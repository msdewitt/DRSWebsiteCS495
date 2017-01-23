(function() {
  'use strict';

  angular
    .module('drsApp.layout')
    .directive('drsNavbar', drsNavbar);

  function drsNavbar() {
    return {
      templateUrl: 'layout/navbar.html',
      restrict: 'E',
      controller: NavbarController,
      controllerAs: 'vm',
      scope: {},
    };
  }

  NavbarController.$inject = ['$state', 'authService'];
  function NavbarController($state, authService) {
  // function NavbarController() {
    var vm = this;

    vm.logout = logout;
    vm.isLoggedIn = authService.isLoggedIn;

    function logout() {
      authService.logout();
      $state.go('home');
    }
  }
})();
