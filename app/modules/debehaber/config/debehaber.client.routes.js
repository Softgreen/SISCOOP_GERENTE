'use strict';

// Setting up route
angular.module('debehaber').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('/debehaber/app', '/debehaber/app/reporte');
        $urlRouterProvider.when('/debehaber/app/reporte', '/debehaber/app/reporte/nuevosSoles');

        $stateProvider
            .state('debehaber', {
                abstract: true,
                url: '/debehaber',
                templateUrl: 'modules/debehaber/views/_body.html',
                controller: 'DebehaberController'
            })
            .state('debehaber.home', {
                url: '/home',
                templateUrl: 'modules/debehaber/views/index.html',
                ncyBreadcrumb: {
                    label: 'Index'
                }
            })
            .state('debehaber.app', {
                url: '/app',
                template: '<div ui-view></div>',
                ncyBreadcrumb: {
                    skip: true // Never display this state in breadcrumb.
                }
            })

            .state('debehaber.app.reporte', {
                url: '/reporte',
                templateUrl: 'modules/debehaber/views/reporteDebeHaber.html',
                controller: 'Debehaber.ReporteDebeHaberController'
            })
            .state('debehaber.app.reporte.historialNuevosSoles', {
                url: '/nuevosSoles',
                templateUrl: 'modules/debehaber/views/historialNuevosSoles.html',
                controller: 'Debehaber.ReporteDebeHaber.HistorialController',
                resolve: {
                    idMoneda: function () {
                        return 1;
                    }
                }
            })
            .state('debehaber.app.reporte.historialDolares', {
                url: '/dolares',
                templateUrl: 'modules/debehaber/views/historialDolares.html',
                controller: 'Debehaber.ReporteDebeHaber.HistorialController',
                resolve: {
                    idMoneda: function () {
                        return 0;
                    }
                }
            })
            .state('debehaber.app.reporte.historialEuros', {
                url: '/euros',
                templateUrl: 'modules/debehaber/views/historialEuros.html',
                controller: 'Debehaber.ReporteDebeHaber.HistorialController',
                resolve: {
                    idMoneda: function () {
                        return 2;
                    }
                }
            })

            .state('debehaber.app.reporteSimplificado', {
              url: '/reporteSimplificado',
              templateUrl: 'modules/debehaber/views/reporteDebeHaber_simplificado.html',
              controller: 'Debehaber.ReporteDebeHaberSimplificadoController'
            })
            .state('debehaber.app.reporteDetallado', {
              url: '/reporteDetallado',
              templateUrl: 'modules/debehaber/views/reporteDebeHaber_detallado.html',
              controller: 'Debehaber.ReporteDebeHaberDetalladoController'
            });
    }
]);
