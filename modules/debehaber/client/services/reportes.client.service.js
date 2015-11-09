'use strict';

angular.module('debehaber').factory('ReportesService', ['Restangular',
    function (Restangular) {

        var baseUrl = 'reportes';

        return {
            getDebeHaber: function (queryParams) {
                return Restangular.all(baseUrl + '/debeHaber').getList(queryParams);
            },
            getDebeHaberTotal: function (queryParams) {
                return Restangular.all(baseUrl + '/debeHaber').customGET('total', queryParams);
            },
            getDebeHaberHistorialTotal: function (queryParams) {
                return Restangular.all(baseUrl + '/debeHaber/historial').getList(queryParams);
            }
        };
    }]);
