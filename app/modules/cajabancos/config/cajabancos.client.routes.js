'use strict';

// Setting up route
angular.module('cajabancos').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('/cajabancos/app', '/cajabancos/app/reporte');

        $stateProvider
            .state('cajabancos', {
                abstract: true,
                url: '/cajabancos',
                templateUrl: 'modules/cajabancos/views/_body.html',
                controller: 'CajabancosController'
            })
            .state('cajabancos.home', {
                url: '/home',
                templateUrl: 'modules/cajabancos/views/index.html',
                ncyBreadcrumb: {
                    label: 'Index'
                }
            })
            .state('cajabancos.app', {
                url: '/app',
                template: '<div ui-view></div>',
                ncyBreadcrumb: {
                    skip: true // Never display this state in breadcrumb.
                }
            })

            .state('cajabancos.app.reporte', {
                url: '/reporte',
                templateUrl: 'modules/cajabancos/views/form-reporteCajaBancos.html',
                controller: 'ReporteController'
            });
    }
]);
