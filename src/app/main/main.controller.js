(function() {
  'use strict';

  angular
    .module('newWebApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(test, $timeout) {
    var vm = this;
    getTestList();
    function getTestList() {
      return test.getTestList()
          .then(function (products) {

          })
          .catch(function (err) {
            console.log(err)
          })
    }
  }
})();
