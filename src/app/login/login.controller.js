(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($rootScope) {
    var vm = this;
    $rootScope.test = true;
  }
})();
