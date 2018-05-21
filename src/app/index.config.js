(function() {
  'use strict';

  angular
    .module('newWebApp')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);


  }

})();
