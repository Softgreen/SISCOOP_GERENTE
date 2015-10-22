'use strict';

/* jshint -W098 */
angular.module('cajabancos').controller('ReporteController', ['$scope', 'Auth', 'SucursalService',

    function ($scope, $state, SucursalService) {

        $scope.combo = {
            sucursal: undefined,
            agencia: undefined
        };
        $scope.combo.selected = {
            sucursal: undefined,
            agencia: undefined
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

    }

]);
