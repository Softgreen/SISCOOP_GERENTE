'use strict';

/* jshint -W098 */
angular.module('pendiente').controller('Pendiente.ReportePendienteController', ['$scope', 'ReportePendienteService',
  function ($scope, ReportePendienteService) {

    //$scope.utilidadTotal = undefined;
    //$scope.utilidadHistorial = [];

    $scope.view = {
      desde: new Date(),
      hasta: new Date()
    };

    $scope.loadDefaultDates = function() {
      var currentDate = new Date();
      $scope.view.desde.setDate(currentDate.getDate() - 30);
      $scope.view.hasta.setDate(currentDate.getDate() - 1);
    };
    $scope.loadDefaultDates();

    $scope.loadPendienteSobrante = function () {
      ReportePendienteService.getPendienteSobrante({idMoneda:0}).then(function (response) {
        $scope.sobranteTotalDolares = response || 0;
      });
      ReportePendienteService.getPendienteSobrante({idMoneda:1}).then(function (response) {
        $scope.sobranteTotalSoles = response || 0;
      });
      ReportePendienteService.getPendienteSobrante({idMoneda:2}).then(function (response) {
        $scope.sobranteTotalEuros = response || 0;
      });
    };
    $scope.loadPendienteSobrante();

    $scope.loadPendienteFaltante = function () {
      ReportePendienteService.getPendienteFaltante({idMoneda:0}).then(function (response) {
        $scope.faltanteTotalDolares = response || 0;
      });
      ReportePendienteService.getPendienteFaltante({idMoneda:1}).then(function (response) {
        $scope.faltanteTotalSoles = response || 0;
      });
      ReportePendienteService.getPendienteFaltante({idMoneda:2}).then(function (response) {
        $scope.faltanteTotalEuros = response || 0;
      });
    };
    $scope.loadPendienteFaltante();

    $scope.buscarPendientes = function() {
      var desde = $scope.view.desde;
      var hasta = $scope.view.hasta;

      ReportePendienteService.getPendienteHistorial({desde: desde.getTime(), hasta: hasta.getTime(), idMoneda:0}).then(function(response){
        $scope.pendienteHistorialDolares = response;
      });

      ReportePendienteService.getPendienteHistorial({desde: desde.getTime(), hasta: hasta.getTime(), idMoneda:1}).then(function(response){
        $scope.pendienteHistorialSoles = response;
      });

      ReportePendienteService.getPendienteHistorial({desde: desde.getTime(), hasta: hasta.getTime(), idMoneda:2}).then(function(response){
        $scope.pendienteHistorialEuros = response;
      });
    };
    $scope.buscarPendientes();

  }
]);
