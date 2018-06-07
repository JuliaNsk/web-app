(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('EditDetailsController', EditDetailsController);

  /** @ngInject */
  function EditDetailsController(products, $state, $stateParams, growl,materials, $scope) {
    let vm = this;
    let currentId = $stateParams.id;
    vm.materialsList = [];
    getDetail();

    function getDetail() {
      return products.getProduct({id: currentId})
          .then(function (detail) {
            vm.detail = detail;
            vm.materialsList = vm.detail.materials;
            vm.detail.price = parseFloat(vm.detail.price);
          })
          .catch(function (err) {
            console.log(err)
          })
    }

    vm.edit = function () {
      angular.forEach(vm.materialsList, function (item, it) {
        return products.addMaterialToProduct({
          materialId: item.id,
          quantity: item.quantity,
          time: item.time,
          cost: item.cost,
          isImproved: item.isImproved,
          productId: currentId
        })
          .then(function () {
            if (it === vm.materialsList.length -1) {
              return products.ediProduct(vm.detail)
                  .then(function (detail) {
                    $state.go('details')
                  })
                  .catch(function (err) {
                    growl.error(err.data.message,  {title: 'ERROR:', ttl: 1000});
                  })
            }
          })
          .catch(function (err) {
            growl.error(err.data.message,  {title: 'ERROR:', ttl: 1000});
          })
      })

    };


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

    vm.addMaterial = function () {
      vm.materialsList.push({id: $scope.selected, quantity: '1', isImproved: false});
    };

    vm.getMaterial = function (material) {
      let currentItem;
      angular.forEach(vm.materials, function (item, it) {
        if (material.id === item._id) {
          currentItem = item;
          return item
        }
      });
      return currentItem
    };

    $scope.DropDownChnaged = function () {
      $scope.selected = $scope.selectedItem;
    };

  }
})();
