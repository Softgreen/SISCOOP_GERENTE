'use strict';

/* jshint -W098 */
angular.module('cajabancos').controller('CajabancosController', ['$scope', 'Auth',
    function ($scope, Auth) {

        $scope.package = {
            name: 'cajabancos'
        };
    }
]);
