(function () {
  'use strict';

  angular
    .module('Blacksmith')
    .factory('test', test);

  /** @ngInject */
  function test($http) {
    return {
      getTestList: getTestList,
      addTest: addTest,
      editTest: editTest,
      deleteTest: deleteTest
    };

    function getTestList(data) {
      return $http.post('', data)
          .then(function (response) {
            return response.data;
          });
    }

    function addTest(data) {
      return $http.post('', data)
        .then(function (response) {
          return response.data;
        });
    }

    function editTest(params) {
      return $http.put('', params)
        .then(function (response) {
          return response.data.data;
        });
    }

    function deleteTest() {
      return $http.delete('')
        .then(function (response) {
          return response.data.data;
        });
    }


  }
})();
