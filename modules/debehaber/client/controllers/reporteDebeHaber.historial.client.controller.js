'use strict';

/* jshint -W098 */
angular.module('debehaber').controller('Debehaber.ReporteDebeHaber.HistorialController',
    function ($scope, idMoneda, ReportesService) {

        $scope.desde = new Date();
        $scope.hasta = new Date();

        $scope.data = {
            fechas: [],
            debe: [],
            haber: []
        };

        $scope.chartConfig = {
            data: {
                x: 'x',
                //xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                columns: [
                    ['x'],
                    //['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                    ['debe'],
                    ['haber']
                ]
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%d-%m-%Y'
                    }
                }
            }
        };

        $scope.loadFecha = function () {
            var currentDate = new Date();
            $scope.desde.setDate(currentDate.getDate() - 13);
            $scope.hasta.setDate(currentDate.getDate() - 1);
        };
        $scope.loadFecha();

        $scope.loadFechas = function () {
            var inicio = new Date($scope.desde.getTime());
            var final = new Date($scope.hasta.getTime());
            for (var d = inicio; d <= final; d.setDate(d.getDate() + 1)) {
                $scope.data.fechas.push(new Date(d));
            }
            $scope.chartConfig.data.columns[0] = $scope.chartConfig.data.columns[0].concat($scope.data.fechas);
        };
        $scope.loadFechas();


        $scope.loadData = function () {
            ReportesService.getDebeHaberHistorialTotal({
                desde: $scope.desde.getTime(),
                hasta: $scope.hasta.getTime(),
                tipo: 'DEBE',
                idMoneda: idMoneda
            }).then(function (response) {
                $scope.data.debe = response;
                var montos = [];
                for (var i = 0; i < response.length; i++) {
                    montos.push(response[i].monto);
                }
                $scope.chartConfig.data.columns[1] = $scope.chartConfig.data.columns[1].concat(montos);
            });

            ReportesService.getDebeHaberHistorialTotal({
                desde: $scope.desde.getTime(),
                hasta: $scope.hasta.getTime(),
                tipo: 'HABER',
                idMoneda: idMoneda
            }).then(function (response) {
                $scope.data.haber = response;
                var montos = [];
                for (var i = 0; i < response.length; i++) {
                    montos.push(response[i].monto);
                }
                $scope.chartConfig.data.columns[2] = $scope.chartConfig.data.columns[2].concat(montos);
            });
        };
        $scope.loadData();

    });
