(function() {
  'use strict';

  angular
    .module('drsApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$state', 'authService'];

  function AuthController($state, authService) {
    var vm = this;

    vm.register = register;
    vm.reset = reset;
    vm.login = login;

    vm.user = {
      email: '',
      name:'',
      password: ''
    }
    function reset(user){
      console.log("")
      return authService.sendPasswordResetEmail(user)

    }
    function register(user) {
      return authService.register(user)
        .then(function() {
          vm.login(user);
        })
        .then(function() {
          return authService.sendAuthEmail(user.email);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    function login(user) {
      return authService.login(user)
      .then(function(user) {
        $state.go('home');
      })
        .catch(function(error) {
          console.log(error);
        });
    }

  }
})();
