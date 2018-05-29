(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('CalculateController', CalculateController);

  /** @ngInject */
  function CalculateController(products, $scope) {
    let vm = this;
      getProductsList();
      vm.quantity = 0;

      function getProductsList() {
          return products.getProductsList({tags: '5b05b900cd3dd77faefb3f74'})
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
                 console.log(result)
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
