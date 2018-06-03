(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('EditProductsController', EditProductsController);

  /** @ngInject */
  function EditProductsController(products, $stateParams, $state) {
    let vm = this;
    let currentId = $stateParams.id;

    getProduct();

    function getProduct() {
      return products.getProduct({id: currentId})
          .then(function (product) {
            vm.product = product;
            vm.product.price = parseFloat(vm.product.price);
          })
          .catch(function (err) {
            console.log(err)
          })
    }

    vm.edit = function () {
      return products.ediProduct(vm.product)
          .then(function (detail) {
            $state.go('products')
          })
          .catch(function (err) {
            console.log(err)
          })
    }


  }
})();
