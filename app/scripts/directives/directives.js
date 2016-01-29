'use strict';

angular.module('mean').filter('sg_nvl', function () {
    return function (input, defaultVal) {
        if(input) {
          return input;
        } else {
          return defaultVal;
        }
    };
});
