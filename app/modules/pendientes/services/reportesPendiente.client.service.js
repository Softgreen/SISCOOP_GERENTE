'use strict';

angular.module('pendiente').factory('ReportePendienteService', ['Restangular',
    function (Restangular) {

        var baseUrl = 'pendiente';

        return {
          getPendienteHistorial: function (queryParams) {
            return Restangular.all(baseUrl).customGET('historialPendiente', queryParams);
          },
          getPendienteSobrante: function (queryParams) {
            return Restangular.all(baseUrl).customGET('pendienteSobrante', queryParams);
          },
          getPendienteFaltante: function (queryParams) {
            return Restangular.all(baseUrl).customGET('pendienteFaltante', queryParams);
          }
        };
    }]);
