'use strict';

// Setting up route
angular.module('debehaber').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('/debehaber/app', '/debehaber/app/reporte');

        $stateProvider
            .state('debehaber', {
                abstract: true,
                url: '/debehaber',
                templateUrl: 'modules/debehaber/client/views/_body.html',
                controller: 'DebehaberController'
            })
            .state('debehaber.home', {
                url: '/home',
                templateUrl: 'modules/debehaber/client/views/index.html',
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
                templateUrl: 'modules/debehaber/client/views/reporte.html',
                controller: 'Debehaber.ReporteController'
            });
    }
]);
