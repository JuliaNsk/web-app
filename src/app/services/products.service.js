(function () {
  'use strict';

  angular
    .module('Blacksmith')
    .factory('products', products);

  /** @ngInject */
  function products($http) {
    return {
        getProductsList: getProductsList,
        getProduct: getProduct,
        addProduct: addProduct,
        ediProduct: ediProduct,
        deleteProduct: deleteProduct,

        addMaterialToProduct: addMaterialToProduct,
        editMaterialForProduct: editMaterialForProduct,
        deleteMaterialFromProduct: deleteMaterialFromProduct,

        addDetailToProduct: addDetailToProduct,
        editDetailForProduct: editDetailForProduct,
        deleteDetailFromProduct: deleteDetailFromProduct,


        addTagToProduct: addTagToProduct,
        deleteTagFromProduct: deleteTagFromProduct,

        changeStockNumber: changeStockNumber,

        estimateProduct: estimateProduct
    };

    function getProductsList(params) {
      return $http.get('http://54.158.129.206:8080/product?tags=' + params.tags)
        .then(function (response) {
            return response.data;
        });
    }

    function getProduct(data) {
      return $http.get('http://54.158.129.206:8080/product/' + data.id)
        .then(function (response) {
            return response.data;
        });
    }

    function addProduct(params) {
      return $http.post('http://54.158.129.206:8080/product', params)
        .then(function (response) {
            return response.data;
        });
    }

    function ediProduct(params) {
      return $http.put('http://54.158.129.206:8080/product/' + params._id, params)
        .then(function (response) {
            return response.data.data;
        });
    }

    function deleteProduct(params) {
      return $http.delete('http://54.158.129.206:8080/product/' + params.id)
        .then(function (response) {
            return response.data.data;
        });
    }





    function addMaterialToProduct(params) {
      return $http.post('http://54.158.129.206:8080/product/' + params.productId + '/material/' + params.materialId)
        .then(function (response) {
            return response.data.data;
        });
    }

    function editMaterialForProduct(params) {
      return $http.put('http://54.158.129.206:8080/product/' + params.productId + '/material/' + params.materialId)
        .then(function (response) {
            return response.data.data;
        });
    }

    function deleteMaterialFromProduct(params) {
      return $http.delete('http://54.158.129.206:8080/product/' + params.productId + '/material/' + params.materialId)
        .then(function (response) {
            return response.data.data;
        });
    }






    function addDetailToProduct(params) {
      return $http.post('http://54.158.129.206:8080/product/' + params.productId + '/detail/' + params.detailId)
        .then(function (response) {
            return response.data.data;
        });
    }

    function editDetailForProduct(params) {
      return $http.put('http://54.158.129.206:8080/product/' + params.productId + '/detail/' + params.detailId)
        .then(function (response) {
            return response.data.data;
        });
    }

    function deleteDetailFromProduct(params) {
      return $http.delete('http://54.158.129.206:8080/product/' + params.productId + '/detail/' + params.detailId)
        .then(function (response) {
            return response.data.data;
        });
    }






    function addTagToProduct(params) {
      return $http.post('http://54.158.129.206:8080/product/' + params.productId + '/tag/' + params.tagId)
        .then(function (response) {
            return response.data.data;
        });
    }

    function deleteTagFromProduct(params) {
      return $http.delete('http://54.158.129.206:8080/product/' + params.productId + '/tag/' + params.tagId)
        .then(function (response) {
            return response.data.data;
        });
    }






    function changeStockNumber(params) {
      return $http.post('http://54.158.129.206:8080/product/' + params.productId + '/stock', params)
        .then(function (response) {
            return response.data.data;
        });
    }




    function estimateProduct(params) {
      return $http.post('http://54.158.129.206:8080/product/' + params.productId + '/estimate', params)
        .then(function (response) {
            return response.data;
        });
    }

  }
})();
