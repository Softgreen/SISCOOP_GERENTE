'use strict';

/* jshint -W098 */
angular.module('cajabancos').controller('ReporteController', ['$scope', 'Auth', 'SucursalService', 'ReporteCajaBancosService',

  function ($scope, $state, SucursalService, ReporteCajaBancosService) {

    $scope.combo = {
      sucursal: undefined,
      agencia: undefined
    };
    $scope.combo.selected = {
      sucursal: undefined,
      agencia: undefined
    };

    $scope.total = {
      caja: {
        soles: undefined,
        dolares: undefined,
        euros: undefined
      },

      cajaSoles: undefined,
      cajaDolares: undefined,
      cajaEuros: undefined
    };

    $scope.chartConfig = {
      data: {
        columns: [
          ['Nuevos soles', 0],
          ['Dolares americanos', 0],
          ['Euros', 0]
        ],
        type: 'bar'
      },
      bar: {
        width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
      }
    };

    $scope.loadCombo = function () {
      SucursalService.getSucursales().then(function (response1) {
        $scope.combo.sucursal = response1;
        $scope.$watch('combo.selected.sucursal', function () {
          if (angular.isDefined($scope.combo.selected.sucursal)) {
            SucursalService.getAgencias($scope.combo.selected.sucursal.id).then(function (response2) {
              $scope.combo.agencia = response2;
            });
          }
        }, true);
      });
    };
    $scope.loadCombo();

    $scope.loadMontoCajas = function () {
      ReporteCajaBancosService.getTotalCaja({idmoneda: 1}).then(function (response) {
        $scope.total.cajaSoles = response || 0;
        $scope.chartConfig.data.columns[0][1] = response || 0;
      });
      ReporteCajaBancosService.getTotalCaja({idmoneda: 0}).then(function (response) {
        $scope.total.cajaDolares = response || 0;
        $scope.chartConfig.data.columns[1][1] = response || 0;
      });
      ReporteCajaBancosService.getTotalCaja({idmoneda: 2}).then(function (response) {
        $scope.total.cajaEuros = response || 0;
        $scope.chartConfig.data.columns[2][1] = response || 0;
      });
    };
    $scope.loadMontoCajas();

    $scope.loadMontoCajasPorAgencias = function () {
      ReporteCajaBancosService.getTotalCajaByAgencia({
        idmoneda: 0,
        idagencia: $scope.combo.selected.agencia.id
      }).then(function (response) {
        $scope.total.caja.dolares = response || 0;
      });

      ReporteCajaBancosService.getTotalCajaByAgencia({
        idmoneda: 1,
        idagencia: $scope.combo.selected.agencia.id
      }).then(function (response) {
        $scope.total.caja.soles = response || 0;
      });

      ReporteCajaBancosService.getTotalCajaByAgencia({
        idmoneda: 2,
        idagencia: $scope.combo.selected.agencia.id
      }).then(function (response) {
        $scope.total.caja.euros = response || 0;
      });
    };




  }
]);
