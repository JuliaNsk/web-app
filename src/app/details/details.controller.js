(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController(products, $timeout) {
    var vm = this;
    getDetailsList();

    function getDetailsList() {
      return products.getProductsList({tags: '5b05d3da32a24f1577877cad'})
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
  }
})();
