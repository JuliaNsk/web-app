(function() {
    'use strict';

    angular
        .module('Blacksmith')
        .controller('DetailController', DetailController);

    /** @ngInject */
    function DetailController(products, $timeout, $stateParams) {
        let vm = this;
        let currentId = $stateParams.id;

        getDetail();

        function getDetail() {
            return products.getProduct({id: currentId})
                .then(function (detail) {
                    vm.detail = detail;
                    vm.detail.price = parseFloat(vm.detail.price)
                })
                .catch(function (err) {
                    console.log(err)
                })
        }
    }
})();
