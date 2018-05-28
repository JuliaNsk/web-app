(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('AddProductsController', AddProductsController);

  /** @ngInject */
  function AddProductsController(materials, $timeout) {
    var vm = this;
    getMaterialsList();
    function getMaterialsList() {
      return materials.getMaterialsList()
        .then(function (materials) {
            vm.materials = materials;
        })
        .catch(function (err) {
          console.log(err)
        })
    }


  }
})();
