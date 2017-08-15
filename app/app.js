'use strict';

// Declare app level module which depends on views, and components
angular.module('logForest', [
  'ngRoute',
  'logForest.logs'
//   'logForest.view2',
//   'logForest.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/logs'});
}]);
