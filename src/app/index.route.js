(function () {
  'use strict';

  angular
    .module('newWebApp')
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

      .state('view-warehouse', {
        url: '/view-warehouse',
        templateUrl: 'app/warehouse/warehouse.html',
        controller: 'WarehouseController',
        controllerAs: 'warehouse',
        resolve: {
          'title': function ($rootScope) {
            $rootScope.pageTitle = 'Обзор склада';
          }
        }
      })

    $urlRouterProvider.otherwise('/');
  }

})();
