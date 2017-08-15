'use strict';

angular.module('logForest.logs', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/logs', {
            templateUrl: 'logs/logs.html',
            controller: 'LogsCtrl'
        });
    }])

    .controller('LogsCtrl', ['logService', logsCtrl]);

function logsCtrl(logService) {
    var viewModel = this;

    logService.get()
        .then(getLogSuccess)
        .catch(errorCallback);

    this.message = "Hi I am in the forest";

    function getLogSuccess(logs) {
        viewModel.logs = logs;
    }

    function errorCallback(msg) {
        console.error('Error: Something went wrong receiving the logs', msg);
    }
}