(function () {
  'use strict';

  angular
    .module('Blacksmith')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = '';
          }
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('materials', {
        url: '/materials',
        templateUrl: 'app/materials/materials.html',
        controller: 'MaterialsController',
        controllerAs: 'materials',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Materials';
          }
        }
      }).state('material', {
        url: '/material/{id}',
        templateUrl: 'app/materials/material.html',
        controller: 'MaterialController',
        controllerAs: 'material',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Material';
            }
          }
        }).state('add-materials', {
        url: '/add-materials',
        templateUrl: 'app/materials/addMaterials.html',
        controller: 'AddMaterialsController',
        controllerAs: 'addMaterials',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Add Materials';
          }
        }
      }).state('edit-materials', {
        url: '/edit-materials/:id',
        templateUrl: 'app/materials/editMaterials.html',
        controller: 'EditMaterialsController',
        controllerAs: 'editMaterials',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Edit Materials';
          }
        }
      })
        .state('details', {
        url: '/details',
        templateUrl: 'app/details/details.html',
        controller: 'DetailsController',
        controllerAs: 'details',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Details';
          }
        }
      }) .state('detail', {
        url: '/detail/:id',
        templateUrl: 'app/details/detail.html',
        controller: 'DetailController',
        controllerAs: 'detail',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Details';
          }
        }
      }) .state('add-details', {
        url: '/add-details',
        templateUrl: 'app/details/addDetails.html',
        controller: 'AddDetailsController',
        controllerAs: 'addDetails',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Add Details';
          }
        }
      }).state('edit-details', {
        url: '/edit-details/:id',
        templateUrl: 'app/details/editDetails.html',
        controller: 'EditDetailsController',
        controllerAs: 'editDetails',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Edit Details';
          }
        }
      }).state('products', {
        url: '/products',
        templateUrl: 'app/products/products.html',
        controller: 'ProductsController',
        controllerAs: 'products',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Products';
          }
        }
      }).state('product', {
        url: '/product/:id',
        templateUrl: 'app/products/product.html',
        controller: 'ProductController',
        controllerAs: 'product',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Products';
          }
        }
      }).state('add-products', {
        url: '/add-products',
        templateUrl: 'app/products/addProducts.html',
        controller: 'AddProductsController',
        controllerAs: 'addProducts',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Add Products';
          }
        }
      }).state('edit-products', {
        url: '/edit-products/:id',
        templateUrl: 'app/products/editProducts.html',
        controller: 'EditProductsController',
        controllerAs: 'editProducts',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Edit Products';
          }
        }
      }).state('calculate', {
        url: '/calculate',
        templateUrl: 'app/calculate/calculate.html',
        controller: 'CalculateController',
        controllerAs: 'calculate',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Calculate';
          }
        }
      })

    $urlRouterProvider.otherwise('/');
  }

})();
