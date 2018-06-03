(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('CalculateController', CalculateController);

  /** @ngInject */
  function CalculateController(products, $scope,tag) {
    let vm = this;
    let categories = tag.tagsList();

      getProductsList();
      vm.quantity = 0;

      function getProductsList() {
          return products.getProductsList({tags: categories.product})
              .then(function (products) {
                  vm.productsList = products;
              })
              .catch(function (err) {
                  console.log(err)
              })
      }

      vm.calculate = function () {
          return products.estimateProduct({productId: $scope.selected, quantity: vm.quantity})
              .then(function (result) {
                 vm.result = result;
              })
              .catch(function (err) {
                  console.log(err)
              })
      };

      $scope.DropDownChnaged = function () {
          $scope.selected = $scope.selectedItem;
      };


  }
})();
