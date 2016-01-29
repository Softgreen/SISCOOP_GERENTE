'use strict';

/* jshint -W098 */
angular.module('debehaber').controller('Debehaber.ReporteDebeHaberSimplificadoController', ['$scope', '$window', 'ReportesService',
    function ($scope, $window, ReportesService) {

      $scope.fecha = new Date();

      $scope.listDebe = [];
      $scope.listHaber = [];

      $scope.totalDebe = 0;
      $scope.totalHaber = 0;

      $scope.dateOptions = {
        formatYear: 'yyyy',
        startingDay: 1
      };

      $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
      };

      var findByPersona = function (list, attrVal) {
        for (var i = 0; i < list.length; i++) {
          if(list[i].persona === attrVal) {
            return list[i];
          }
        }
        return undefined;
      };
      $scope.getTotal = function (list, idMoneda) {
        var total = 0;
        if(!angular.isArray(list)){
          return total;
        }

        for (var i = 0; i < list.length; i++) {
          if(idMoneda === 1) {
            total = total + (list[i].montoSoles || 0);
          } else if(idMoneda === 0) {
            total = total + (list[i].montoDolares || 0);
          } else if(idMoneda === 2) {
            total = total + (list[i].montoEuros || 0);
          }
        }
        return total;
      };

      $scope.generarReporte = function () {
        if ($scope.form.$valid) {
          ReportesService.getDebeHaberSimplificado({fecha: $scope.fecha.getTime(), tipo: 'DEBE'}).then(function (response) {
            $scope.listDebe = [];
            for (var i = 0; i < response.length; i++) {
              var cuentaExistente = findByPersona($scope.listDebe, response[i].persona);
              var row;
              if(cuentaExistente) {
                row = cuentaExistente;
              } else {
                row = response[i];
                $scope.listDebe.push(row);
              }
              if(response[i].idMoneda === 1) {
                row.montoSoles = (row.montoSoles || 0 ) + response[i].monto;
              } else if(response[i].idMoneda === 0) {
                row.montoDolares = (row.montoDolares || 0 ) + response[i].monto;
              } else if(response[i].idMoneda === 2) {
                row.montoEuros = (row.montoDolares || 0 ) + response[i].monto;
              }
            }
          });
          ReportesService.getDebeHaberSimplificado({fecha: $scope.fecha.getTime(), tipo: 'HABER'}).then(function (response) {
            $scope.listHaber = response;
            for (var i = 0; i < response.length; i++) {
              var cuentaExistente = findByPersona($scope.listHaber, response[i].persona);
              var row;
              if(cuentaExistente) {
                row = cuentaExistente;
              } else {
                row = response[i];
                $scope.listHaber.push(row);
              }
              if(response[i].idMoneda === 1) {
                row.montoSoles = (row.montoSoles || 0 ) + response[i].monto;
              } else if(response[i].idMoneda === 0) {
                row.montoDolares = (row.montoDolares || 0 ) + response[i].monto;
              } else if(response[i].idMoneda === 2) {
                row.montoEuros = (row.montoDolares || 0 ) + response[i].monto;
              }
            }
          });
        }
      };

      $scope.imprimir = function () {
        $window.open(ReportesService.getDebeHaberPdfUrl($scope.fecha));
      };

    }
]);
