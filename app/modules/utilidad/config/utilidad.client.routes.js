'use strict';

// Setting up route
angular.module('utilidad').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/utilidad/app', '/utilidad/app/reporte');

    $stateProvider
      .state('utilidad', {
        abstract: true,
        url: '/utilidad',
        templateUrl: 'modules/utilidad/views/_body.html',
        controller: 'UtilidadController'
      })
      .state('utilidad.home', {
        url: '/home',
        templateUrl: 'modules/utilidad/views/index.html',
        ncyBreadcrumb: {
          label: 'Index'
        }
      })
      .state('utilidad.app', {
        url: '/app',
        template: '<div ui-view></div>',
        ncyBreadcrumb: {
          skip: true // Never display this state in breadcrumb.
        }
      })

      .state('utilidad.app.reporte', {
        url: '/reporte',
        templateUrl: 'modules/utilidad/views/utilidadReporte.html',
        controller: 'Utilidad.ReporteUtilidadController'
      });

  }
]);
