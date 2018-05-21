(function() {
  'use strict';

  angular
    .module('newWebApp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($rootScope) {
    var vm = this;
    $rootScope.test = true;
  }
})();
