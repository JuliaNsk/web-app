(function() {
    'use strict';

    angular
        .module('Blacksmith')
        .controller('MaterialController', MaterialController);

    /** @ngInject */
    function MaterialController(materials, $timeout, $stateParams) {
        let vm = this;
        let currentId = $stateParams.id;

        getMaterial();

        function getMaterial() {
            return materials.getMaterial({id: currentId})
                .then(function (material) {
                    vm.material = material;
                    vm.material.price = parseFloat(vm.material.price)
                })
                .catch(function (err) {
                    console.log(err)
                })
        }
    }
})();
