(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('EditMaterialsController', EditMaterialsController);

  /** @ngInject */
  function EditMaterialsController(materials, $stateParams, $state) {
    let vm = this;
    let currentId = $stateParams.id;

    getMaterial();

    function getMaterial() {
      return materials.getMaterial({id: currentId})
          .then(function (material) {
            vm.material = material;
            vm.material.price = parseFloat(vm.material.price);
          })
          .catch(function (err) {
            console.log(err)
          })
    }

    vm.edit = function () {
      return materials.editMaterial(vm.material)
          .then(function (material) {
            $state.go('materials')
          })
          .catch(function (err) {
            console.log(err)
          })
    }


  }
})();
