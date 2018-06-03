(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController(products, tag) {
    let vm = this;
    let categories = tag.tagsList();

    getDetailsList();

    function getDetailsList() {
      return products.getProductsList({tags: categories.detail})
          .then(function (products) {
              vm.details =  products;
            console.log(products)
          })
          .catch(function (err) {
            console.log(err)
          })
    }
      vm.removeDetail = function (id) {
          return products.deleteProduct({id: id})
              .then(function (products) {
                  getDetailsList()
              })
              .catch(function (err) {
                  console.log(err)
              })
      }

    vm.editStock = function (detail) {
      return products.changeStockNumber({productId: detail._id, change: detail.stock})
          .then(function (material) {
            $state.go('materials')
          })
          .catch(function (err) {
            console.log(err)
          })

    }
  }
})();
