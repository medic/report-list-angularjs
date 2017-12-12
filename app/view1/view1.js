'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'Reports', function($scope, Reports) {
  $scope.reports = Reports();

  $scope.setSelected = function(report) {
    $scope.selected = report;
  }
}]);