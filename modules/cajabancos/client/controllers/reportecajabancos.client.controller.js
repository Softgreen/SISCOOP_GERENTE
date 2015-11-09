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

            cajas: undefined,
            bancos: undefined
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

        $scope.filterOptions = {
            filterText: undefined,
            idSucursal: undefined,
            idAgencia: undefined
        };

        $scope.loadMontoCajas=function(){
            ReporteCajaBancosService.getTotalCajaByAgencia({idmoneda: 0, idagencia: $scope.combo.selected.agencia.id}).then(function (response) {
                $scope.total.caja.dolares = response || 0;
                console.log('dasdas');
            });

            ReporteCajaBancosService.getTotalCajaByAgencia({idmoneda: 1, idagencia: $scope.combo.selected.agencia.id}).then(function (response) {
                $scope.total.caja.soles = response || 0;
            });

            ReporteCajaBancosService.getTotalCajaByAgencia({idmoneda: 2, idagencia: $scope.combo.selected.agencia.id}).then(function (response) {
                $scope.total.caja.euros = response || 0;
            });
        };

    }
]);
