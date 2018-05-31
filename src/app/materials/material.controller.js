(function() {
    'use strict';

    angular
        .module('Blacksmith')
        .controller('MaterialController', MaterialController);

    /** @ngInject */
    function MaterialController(materials, $timeout, $transition$) {
        var vm = this;
        var id = $transition$.params().id;

        getMaterial();

        function getMaterial() {
            return materials.getMaterial(this.id)
                .then(function (material) {
                    vm.material = material;
                    console.log(vm.material);
                })
                .catch(function (err) {
                    console.log(err)
                })
        }
    }
})();
