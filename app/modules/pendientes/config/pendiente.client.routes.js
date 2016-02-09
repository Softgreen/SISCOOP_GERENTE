'use strict';

// Setting up route
angular.module('pendiente').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/pendiente/app', '/pendiente/app/reportePendiente');

    $stateProvider
      .state('pendiente', {
        abstract: true,
        url: '/pendiente',
        templateUrl: 'modules/pendientes/views/_body.html',
        controller: 'PendienteController'
      })
      .state('pendiente.home', {
        url: '/home',
        templateUrl: 'modules/pendientes/views/index.html',
        ncyBreadcrumb: {
          label: 'Index'
        }
      })
      .state('pendiente.app', {
        url: '/app',
        template: '<div ui-view></div>',
        ncyBreadcrumb: {
          skip: true // Never display this state in breadcrumb.
        }
      })

      .state('pendiente.app.reporte', {
        url: '/reportePendiente',
        templateUrl: 'modules/pendientes/views/pendienteReporte.html',
        controller: 'Pendiente.ReportePendienteController'
      })

      /*.state('utilidad.app.reporteDetallado', {
        url: '/reporteDetallado',
        templateUrl: 'modules/utilidad/views/reporte_detallado.html',
        controller: 'Utilidad.ReporteDetalladoController'
      })
      .state('utilidad.app.reporteMovimientos', {
        url: '/reporteMovimientos',
        templateUrl: 'modules/utilidad/views/reporte_movimientos.html',
        controller: 'Utilidad.ReporteMovimientosController'
      });
      */
  }
]);
