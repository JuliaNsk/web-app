(function() {
  'use strict';

  angular
    .module('Blacksmith')
    .controller('EditDetailsController', EditDetailsController);

  /** @ngInject */
  function EditDetailsController(products, $state, $stateParams) {
    let vm = this;
    let currentId = $stateParams.id;

    getDetail();

    function getDetail() {
      return products.getProduct({id: currentId})
          .then(function (detail) {
            vm.detail = detail;
            vm.detail.price = parseFloat(vm.detail.price);
          })
          .catch(function (err) {
            console.log(err)
          })
    }

    vm.edit = function () {
      return products.ediProduct(vm.detail)
          .then(function (detail) {
            $state.go('details')
          })
          .catch(function (err) {
            console.log(err)
          })
    }


  }
})();
