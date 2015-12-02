'use strict';

angular.module('cajabancos').factory('ReporteCajaBancosService', ['Restangular',
    function (Restangular) {

        var baseUrl = 'reporteCajaBancos';

        return {
            getTotalCajaByAgencia: function (queryParams) {
                return Restangular.all(baseUrl).customGET('montoCajaPorAgencias', queryParams);
            },

            getTotalCaja: function (queryParams) {
                return Restangular.all(baseUrl).customGET('montoTotalCaja', queryParams);
            }
        };

    }]);
