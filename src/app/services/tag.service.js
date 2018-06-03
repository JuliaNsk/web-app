(function () {
  'use strict';

  angular
    .module('Blacksmith')
    .factory('tag', tag);

  /** @ngInject */
  function tag($http) {
    return {
      tagsList: tagsList,
      getTagsList: getTagsList,
      getTag: getTag,
      addTag: addTag,
      editTag: editTag,
      deleteTag: deleteTag
    };

    function tagsList() {
      return {
        detail: '5b05d3da32a24f1577877cad',
        product: '5b05b900cd3dd77faefb3f74'
      }
    }

    function getTagsList() {
      return $http.get('http://54.158.129.206:8080/tag')
        .then(function (response) {
            return response.data;
        });
    }

    function getTag(data) {
      return $http.get('http://54.158.129.206:8080/tag/' + data.id)
        .then(function (response) {
            return response.data;
        });
    }

    function addTag(params) {
      return $http.post('http://54.158.129.206:8080/tag', params)
        .then(function (response) {
            return response.data.data;
        });
    }

    function editTag(params) {
      return $http.put('http://54.158.129.206:8080/tag/' + params.id, params)
        .then(function (response) {
            return response.data.data;
        });
    }

    function deleteTag(params) {
      return $http.delete('http://54.158.129.206:8080/tag/' + params.id)
        .then(function (response) {
            return response.data.data;
        });
    }


  }
})();
