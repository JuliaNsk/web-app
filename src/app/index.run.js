(function() {
  'use strict';

  angular
    .module('newWebApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $http) {
    $log.debug('runBlock end');

  }

})();
