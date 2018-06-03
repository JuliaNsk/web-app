(function() {
    'use strict';

    angular
        .module('Blacksmith')
        .controller('ProductController', ProductController);

    /** @ngInject */
    function ProductController(products, $timeout, $stateParams) {
        let vm = this;
        let currentId = $stateParams.id;

        getProduct();

        function getProduct() {
            return products.getProduct({id: currentId})
                .then(function (product) {
                    vm.product = product;
                    vm.product.price = parseFloat(vm.product.price)
                })
                .catch(function (err) {
                    console.log(err)
                })
        }
    }
})();
