(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('ProductsController', ProductsController);

  /** @ngInject */
  function ProductsController(products, materials) {
    let vm = this;
    getProductsList();

    function getProductsList() {
      return products.getProductsList({tags: '5b05b900cd3dd77faefb3f74'})
        .then(function (products) {
          vm.products = products;
        })
        .catch(function (err) {
          console.log(err)
        })
    }
    
    vm.removeProduct = function (id) {
        return products.deleteProduct({id: id})
            .then(function (products) {
                getProductsList();
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    // function getMaterialsList() {
    //     // return materials.getMaterialsList()
    //     //     .then(function (materials) {
    //     //         vm.materials = materials;
    //     //         angular.forEach(vm.products, function (i, item) {
    //     //             angular.forEach(i.details, function (i, it) {
    //     //
    //     //                 angular.forEach(vm.materials, function (item, it) {
    //     //                     if (item._id === i._id) {
    //     //                         i.name = item.
    //     //                     }
    //     //                 });
    //     //
    //     //                 })
    //     //             });
    //     //     })
    //     //     .catch(function (err) {
    //     //         console.log(err)
    //     //     })
    // }
  }
})();
