(function () {
  'use strict';

  angular
    .module('Blacksmith')
    .factory('details', details);

  /** @ngInject */
  function details($http) {
    return {
        getDetailsList: getDetailsList,
        getDetail: getDetail,
    };

    function getDetailsList(params) {
      return $http.get('http://54.158.129.206:8080/product?tags=' + params.tags)
        .then(function (response) {
            return response.data;
        });
    }

    function getDetail(data) {
      return $http.get('http://54.158.129.206:8080/product/' + data.id)
        .then(function (response) {
            return response.data;
        });
    }
  }
})();
