(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('AddMaterialsController', AddMaterialsController);

  /** @ngInject */
  function AddMaterialsController(materials, $state, FileUploader, $scope, growl) {
    let vm = this;

      let uploader = $scope.uploader = new FileUploader({
          url: 'upload.php'
      });

      uploader.onAfterAddingFile = function(fileItem) {
          console.info('onAfterAddingFile', fileItem);
      };

    vm.material = {
      width: 0,
      height: 0,
      length: 0,
      radius: 0,
      image: ""
    };

    vm.add = function () {
      return materials.addMaterial(vm.material)
        .then(function (material) {
          $state.go('materials')
        })
        .catch(function (err) {
          growl.error(err.data.message,  {title: 'ERROR:', ttl: 1000});
        })
    };

    vm.upload = function (img) {
      vm.material.image = img
    }
  }
})();
