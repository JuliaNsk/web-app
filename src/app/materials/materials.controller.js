(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('MaterialsController', MaterialsController);

  /** @ngInject */
  function MaterialsController(materials, growl) {
    let vm = this;

    getMaterialsList();
    function getMaterialsList() {
      return materials.getMaterialsList()
        .then(function (materials) {
            vm.materials = materials;
        })
        .catch(function (err) {
          growl.error(err.data.message,  {title: 'ERROR:', ttl: 1000});
        })
    }

    vm.removeMaterial = function (id) {
      return materials.deleteMaterial({id: id})
        .then(function (materials) {
          getMaterialsList()
        })
        .catch(function (err) {
          growl.error(err.data.message,  {title: 'ERROR:', ttl: 1000});
        })
    };

    vm.editStock = function (material) {
      return materials.editMaterial(material)
          .then(function (material) {
            $state.go('materials')
          })
          .catch(function (err) {
            console.log(err)
          })

    }
  }
})();
