(function (app) {

    app.filter('colorStatus', colorStatus);

    function colorStatus() {
        return function (input) {
            switch(input) {
                case 'error':
                case 'fatal':
                    return 'bg-danger text-light';
                default:
                    return 'bg-light';
            }
        };
    }

})(angular.module('logForest'));