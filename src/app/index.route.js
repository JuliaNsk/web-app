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
      })

    $urlRouterProvider.otherwise('/');
  }

})();
