(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('MaterialsController', MaterialsController);

  /** @ngInject */
  function MaterialsController(materials, $rootScope) {
    let vm = this;

    console.log($rootScope)
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

    vm.removeMaterial = function (id) {
        return materials.deleteMaterial({id: id})
            .then(function (materials) {
                getMaterialsList()
            })
            .catch(function (err) {
                console.log(err)
            })
    }
  }
})();
