(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('EditDetailsController', EditDetailsController);

  /** @ngInject */
  function EditDetailsController(materials, $timeout) {
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
