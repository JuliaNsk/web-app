(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($rootScope) {
    let vm = this;
    $rootScope.test = true;
  }
})();
