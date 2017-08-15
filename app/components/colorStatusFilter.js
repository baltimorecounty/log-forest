(function (app) {

    app.filter('colorStatus', colorStatus);

    function colorStatus() {
        return function (input) {
            switch (input) {
                case 'error':
                case 'fatal':
                    return 'border border-danger text-danger';
                case 'warn':
                    return 'border border-warning text-warning';
                case 'info':
                    return 'border border-info text-info';
                case 'notify':
                    return 'border border-secondary text-secondary';
                case 'debug':
                    return 'border border-dark';
                default:
                    return 'border border-light';
            }
        };
    }

})(angular.module('logForest'));