'use strict';

/* jshint -W098 */
angular.module('debehaber').controller('Debehaber.ReporteDebeHaberController', ['$scope', 'ReportesService',
    function ($scope, ReportesService) {

        $scope.fecha = new Date();
        $scope.total = {
            nuevosSoles: {
                debe: undefined,
                haber: undefined
            },
            dolares: {
                debe: undefined,
                haber: undefined
            },
            euros: {
                debe: undefined,
                haber: undefined
            }
        };

        $scope.loadFecha = function () {
            var currentDate = new Date();
            $scope.fecha.setDate(currentDate.getDate() - 1);
        };
        $scope.loadFecha();

        $scope.loadTotal = function () {
            ReportesService.getDebeHaberTotal({fecha: $scope.fecha.getTime(), tipo: 'DEBE', idMoneda: 1}).then(function (response) {
                $scope.total.nuevosSoles.debe = response || 0;
            });
            ReportesService.getDebeHaberTotal({fecha: $scope.fecha.getTime(), tipo: 'HABER', idMoneda: 1}).then(function (response) {
                $scope.total.nuevosSoles.haber = response || 0;
            });

            ReportesService.getDebeHaberTotal({fecha: $scope.fecha.getTime(), tipo: 'DEBE', idMoneda: 0}).then(function (response) {
                $scope.total.dolares.debe = response || 0;
            });
            ReportesService.getDebeHaberTotal({fecha: $scope.fecha.getTime(), tipo: 'HABER', idMoneda: 0}).then(function (response) {
                $scope.total.dolares.haber = response || 0;
            });

            ReportesService.getDebeHaberTotal({fecha: $scope.fecha.getTime(), tipo: 'DEBE', idMoneda: 2}).then(function (response) {
                $scope.total.euros.debe = response || 0;
            });
            ReportesService.getDebeHaberTotal({fecha: $scope.fecha.getTime(), tipo: 'HABER', idMoneda: 2}).then(function (response) {
                $scope.total.euros.haber = response || 0;
            });
        };
        $scope.loadTotal();

    }
]);
