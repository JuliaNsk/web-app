(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $http) {
    $log.debug('runBlock end');

  }

})();
