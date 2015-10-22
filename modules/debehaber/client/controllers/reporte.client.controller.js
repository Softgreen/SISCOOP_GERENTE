'use strict';

/* jshint -W098 */
angular.module('debehaber').controller('Debehaber.ReporteController', ['$scope', 'ReportesService',
    function ($scope, ReportesService) {


        /*
         getDebeHaber: function (queryParams) {
         return Restangular.all(baseUrl + '/debeHaber').getList(queryParams);
         },
         getDebeHaberTotal: function (queryParams) {
         return Restangular.all(baseUrl + '/debeHaber/total').getList(queryParams);
         },
         getDebeHaberHistorialTotal: function (queryParams) {
         return Restangular.all(baseUrl + '/debeHaber/historial').getList(queryParams);
         }
         */

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

        $scope.loadFecha = function(){
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

        $scope.config = {
            'chartId': 'exampleTrendsChart',
            'title': 'Network Utilization Trends',
            'layout': 'large',
            'trendLabel': 'Virtual Disk I/O',
            'valueType': 'actual',
            'timeFrame': 'Last 15 Minutes',
            'units': 'MHz',
            'tooltipType': 'percentage'
        };
        $scope.config2 = {
            'chartId': 'example2TrendsChart',
            'title': 'Storage Capacity',
            'layout': 'compact',
            'valueType': 'actual',
            'units': 'TB',
            'tooltipType': 'percentage'
        };
        $scope.footerConfig = {
            'iconClass': 'fa fa-plus-circle',
            'text': 'Add New Cluster',
            'callBackFn': function () {
                alert("Footer Callback Fn Called");
            }
        };
        $scope.filterConfig = {
            'filters': [{label: 'Last 30 Days', value: '30'},
                {label: 'Last 15 Days', value: '15'},
                {label: 'Today', value: 'today'}],
            'callBackFn': function (f) {
                alert("Filter Callback Fn Called for '" + f.label + "' value = " + f.value);
            }
        };
        var today = new Date();
        var dates = ['dates'];
        for (var d = 20 - 1; d >= 0; d--) {
            dates.push(new Date(today.getTime() - (d * 24 * 60 * 60 * 1000)));
        }
        $scope.data = {
            'total': '250',
            'xData': dates,
            'yData': ['used', '10', '20', '30', '20', '30', '10', '14', '20', '25', '68', '54', '56', '78', '56', '67', '88', '76', '65', '87', '76']
        };
        $scope.custShowXAxis = false;
        $scope.custShowYAxis = false;
        $scope.addDataPoint = function () {
            $scope.data.xData.push(new Date($scope.data.xData[$scope.data.xData.length - 1].getTime() + (24 * 60 * 60 * 1000)));
            $scope.data.yData.push(Math.round(Math.random() * 100));
        };
        $scope.$watch('valueType', function (newValue) {
            $scope.config.valueType = newValue;
        });
        $scope.$watch('layout', function (newValue) {
            $scope.config.layout = newValue;
        });

    }
]);
