(function () {
    'use strict';

    angular
        .module('Blacksmith')
        .controller('AddDetailsController', AddDetailsController);

    /** @ngInject */
    function AddDetailsController(products, $state, FileUploader, $scope, growl) {
        var vm = this;
        let uploader = $scope.uploader = new FileUploader({});

        uploader.onAfterAddingFile = function (fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };

        vm.detail = {
            width: 0,
            height: 0,
            length: 0,
            radius: 0,
            image: ""
        };

        vm.add = function () {
            return products.addProduct(vm.detail)
                .then(function (detail) {
                    addTagToProduct(detail._id)
                })
                .catch(function (err) {
                    growl.error(err.data.message, {title: 'ERROR:', ttl: 1000});
                })
        };

        vm.upload = function (img) {
            vm.detail.image = img
        };

        function addTagToProduct(id) {

            return products.addTagToProduct({productId: id, tagId: '5b05d3da32a24f1577877cad'})
                .then(function (detail) {
                    $state.go('details')
                })
                .catch(function (err) {
                    growl.error(err.data.message, {title: 'ERROR:', ttl: 1000});
                })
        }
    }
})();
