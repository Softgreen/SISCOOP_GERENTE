'use strict';

// Setting up route
angular.module('utilidad').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.when('/utilidad/app', '/utilidad/app/reporte');

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
        url: '/reporteResumen',
        templateUrl: 'modules/utilidad/views/utilidadReporte.html',
        controller: 'Utilidad.ReporteUtilidadController'
      })
      .state('utilidad.app.reporteDetallado', {
        url: '/reporteDetallado',
        templateUrl: 'modules/utilidad/views/reporte_detallado.html',
        controller: 'Utilidad.ReporteDetalladoController'
      })
      .state('utilidad.app.reporteMovimientos', {
        url: '/reporteMovimientos',
        templateUrl: 'modules/utilidad/views/reporte_movimientos.html',
        controller: 'Utilidad.ReporteMovimientosController'
      });

  }
]);
