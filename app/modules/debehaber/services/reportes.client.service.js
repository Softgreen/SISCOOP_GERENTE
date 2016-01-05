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
            },
            getDebeHaberPdfUrl: function(fecha) {
              return Restangular.all(baseUrl + '/debeHaber/pdf?fecha=' + fecha.getTime()).getRestangularUrl();
            },

            getCuentasPorCobrar: function (queryParams) {
              return Restangular.all(baseUrl).customGET('cuentasPorCobrar', queryParams);
            },
            getCuentasPorPagar: function (queryParams) {
              return Restangular.all(baseUrl).customGET('cuentasPorPagar', queryParams);
            },
            getPatrimonio: function (queryParams) {
              return Restangular.all(baseUrl).customGET('patrimonio', queryParams);
            },

            getUtilidad: function (queryParams) {
              return Restangular.all(baseUrl).customGET('utilidad', queryParams);
            },
            getUtilidadHistorial: function (queryParams) {
              return Restangular.all(baseUrl).customGET('utilidad/historial', queryParams);
            }
        };
    }]);
