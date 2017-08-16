(function (app) {

    app.directive('browserIcon', ['browserService', browserIcon]);

    function browserIcon(browserService) {
        return {
            restrict: 'E',
            templateUrl: 'components/browser/browser-icon.html',
            scope: {
                userAgent: '=userAgent'
            },
            link: function(scope, element, attrs) {
                scope.browserIconClass = browserService.getBrowserIconFromUserAgent(scope.userAgent);
            }
        };
    }

})(angular.module('logForest'));