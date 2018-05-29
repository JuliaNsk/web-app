(function () {
    'use strict';

    angular
        .module('Blacksmith')
        .controller('AddProductsController', AddProductsController);

    /** @ngInject */
    function AddProductsController(products, $state, FileUploader, $scope, growl, materials) {
        let vm = this;

        getMaterials().then(getDetails());

        let uploader = $scope.uploader = new FileUploader({});

        uploader.onAfterAddingFile = function (fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };

        vm.product = {
            width: 0,
            height: 0,
            length: 0,
            radius: 0,
            image: ""
        };

        vm.add = function () {
            return products.addProduct(vm.product)
                .then(function (product) {
                    addTagToProduct(product._id)
                })
                .catch(function (err) {
                    console.log(err)
                    growl.error(err.data.message, {title: 'ERROR:', ttl: 1000});
                })
        };

        vm.upload = function (img) {
            vm.product.image = img
        };

        $scope.materials = [{}];
        $scope.details = [{}];

        $scope.addNewMaterial = function() {
            $scope.materials.push({});
        };

        $scope.addNewDetail = function() {
            $scope.details.push({});
        };

        $scope.removeNewMaterial = function() {
            var newItemNo = $scope.materials.length-1;
            if ( newItemNo !== 0 ) {
                $scope.materials.pop();
            }
        };

        $scope.removeNewDetail = function() {
            var newItemNo = $scope.details.length-1;
            if ( newItemNo !== 0 ) {
                $scope.details.pop();
            }
        };

        $scope.showAddMaterial = function(material) {
            return material.id === $scope.materials[$scope.materials.length-1].id;
        };
        $scope.showAddDetail = function(detail) {
            return detail.id === $scope.details[$scope.details.length-1].id;
        };

        function getMaterials() {
            return materials.getMaterialsList()
                .then(function (materials) {
                    vm.materialsList = materials;
                })
                .catch(function (err) {
                    growl.error(err.data.message, {title: 'ERROR:', ttl: 1000});
                })
        }

        function getDetails() {
            return products.getProductsList({tags: '5b05d3da32a24f1577877cad'})
                .then(function (details) {
                    vm.detailsList = details;
                })
                .catch(function (err) {
                    console.log(err)
                })
        }

        function addTagToProduct(id) {
            return products.addTagToProduct({productId: id, tagId: '5b05b900cd3dd77faefb3f74'})
                .then(function (product) {
                    $state.go('products')
                })
                .catch(function (err) {
                    growl.error(err.data.message, {title: 'ERROR:', ttl: 1000});
                })
        }

    }
})();
