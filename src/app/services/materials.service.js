(function () {
  'use strict';

  angular
    .module('Blacksmith')
    .factory('materials', materials);

  /** @ngInject */
  function materials($http) {
    return {
      getMaterialsList: getMaterialsList,
      getMaterial: getMaterial,
      addMaterial: addMaterial,
      editMaterial: editMaterial,
      deleteMaterial: deleteMaterial
    };

    function getMaterialsList() {
      return $http.get('http://54.158.129.206:8080/material')
          .then(function (response) {
            return response.data;
          });
    }

    function getMaterial(data) {
      return $http.get('http://54.158.129.206:8080/material/' + data.id)
        .then(function (response) {
          return response.data;
        });
    }

    function addMaterial(params) {
      return $http.post('http://54.158.129.206:8080/material', params)
        .then(function (response) {
          return response.data.data;
        });
    }

    function editMaterial(params) {
      return $http.put('http://54.158.129.206:8080/material/' + params._id, params)
        .then(function (response) {
          return response.data.data;
        });
    }

    function deleteMaterial(params) {
      return $http.delete('http://54.158.129.206:8080/material/' + params.id)
        .then(function (response) {
          return response.data.data;
        });
    }


  }
})();
