'use strict';

/* jshint -W098 */
angular.module('utilidad').controller('Utilidad.ReporteUtilidadController', ['$scope', 'ReportesService', 'ReporteCajaBancosService',
  function ($scope, ReportesService, ReporteCajaBancosService) {

    $scope.utilidad = {
      total: undefined,
      soles: undefined,
      dolares: undefined,
      euros: undefined
    };

    $scope.moneda = {
      soles: {id: 1, denominacion: 'Nuevos Soles'},
      dolares: {id: 0, denominacion: 'Dolares'},
      euros: {id: 2, denominacion: 'Euros'}
    };

    $scope.caja = {
      soles: undefined,
      dolares: undefined,
      euros: undefined
    };
    $scope.bancos = {
      soles: undefined,
      dolares: undefined,
      euros: undefined
    };

    $scope.cuentasPorCobrar = {
      soles: undefined,
      dolares: undefined,
      euros: undefined
    };
    $scope.cuentasPorPagar = {
      soles: undefined,
      dolares: undefined,
      euros: undefined
    };

    $scope.patrimonio = {
      soles: undefined,
      dolares: undefined,
      euros: undefined
    };

    $scope.loadUtilidad = function () {
      ReportesService.getUtilidad().then(function (response) {
        $scope.utilidad.total = response || 0;
      });
      ReportesService.getUtilidad({idMoneda: 1}).then(function (response) {
        $scope.utilidad.soles = response || 0;
      });
      ReportesService.getUtilidad({idMoneda: 0}).then(function (response) {
        $scope.utilidad.dolares = response || 0;
      });
      ReportesService.getUtilidad({idMoneda: 2}).then(function (response) {
        $scope.utilidad.euros = response || 0;
      });
    };
    $scope.loadUtilidad();

    $scope.loadCaja = function() {
      ReporteCajaBancosService.getTotalCaja({idmoneda: 1}).then(function (response) {
        $scope.caja.soles = response || 0;
      });
      ReporteCajaBancosService.getTotalCaja({idmoneda: 0}).then(function (response) {
        $scope.caja.dolares = response || 0;
      });
      ReporteCajaBancosService.getTotalCaja({idmoneda: 2}).then(function (response) {
        $scope.caja.euros = response || 0;
      });
    };
    $scope.loadCaja();

    $scope.loadBancos = function() {
      ReporteCajaBancosService.getTotalBancos({idMoneda: 1}).then(function (response) {
        $scope.bancos.soles = response || 0;
      });
      ReporteCajaBancosService.getTotalBancos({idMoneda: 0}).then(function (response) {
        $scope.bancos.dolares = response || 0;
      });
      ReporteCajaBancosService.getTotalBancos({idMoneda: 2}).then(function (response) {
        $scope.bancos.euros = response || 0;
      });
    };
    $scope.loadBancos();

    $scope.loadCuentasPorPagar = function() {
      ReportesService.getCuentasPorPagar({idMoneda: 1}).then(function (response) {
        $scope.cuentasPorPagar.soles = response || 0;
      });
      ReportesService.getCuentasPorPagar({idMoneda: 0}).then(function (response) {
        $scope.cuentasPorPagar.dolares = response || 0;
      });
      ReportesService.getCuentasPorPagar({idMoneda: 2}).then(function (response) {
        $scope.cuentasPorPagar.euros = response || 0;
      });
    };
    $scope.loadCuentasPorPagar();

    $scope.loadCuentasPorCobrar = function() {
      ReportesService.getCuentasPorCobrar({idMoneda: 1}).then(function (response) {
        $scope.cuentasPorCobrar.soles = response || 0;
      });
      ReportesService.getCuentasPorCobrar({idMoneda: 0}).then(function (response) {
        $scope.cuentasPorCobrar.dolares = response || 0;
      });
      ReportesService.getCuentasPorCobrar({idMoneda: 2}).then(function (response) {
        $scope.cuentasPorCobrar.euros = response || 0;
      });
    };
    $scope.loadCuentasPorCobrar();

    $scope.loadPatrimonio = function() {
      ReportesService.getPatrimonio({idMoneda: 1}).then(function (response) {
        $scope.patrimonio.soles = response || 0;
      });
      ReportesService.getPatrimonio({idMoneda: 0}).then(function (response) {
        $scope.patrimonio.dolares = response || 0;
      });
      ReportesService.getPatrimonio({idMoneda: 2}).then(function (response) {
        $scope.patrimonio.euros = response || 0;
      });
    };
    $scope.loadPatrimonio();

  }
]);
