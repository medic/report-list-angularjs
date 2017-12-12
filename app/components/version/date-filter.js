'use strict';

angular.module('myApp.date-filter', [])

.filter('interpolate', [function() {
  return function(date) {
    return date.getDate() + '-' + date.getMonth()+1 + '-' + date.getFullYear();
  };
}]);
