(function (app) {

    app.directive('browserIcon', ['browserFilter', browserIcon]);

    function browserIcon(browserFilter) {
        return {
            restrict: 'E',
            templateUrl: 'components/browser/browser-icon.html',
            scope: {
                userAgent: '=userAgent'
            },
            link: function(scope, element, attrs) {
                function getBrowserName() {
                    var browserVersion = browserFilter(scope.userAgent);

                    if (browserVersion.toLowerCase().indexOf('chrome ') > -1) {
                        return 'chrome';
                    }
                    if (browserVersion.toLowerCase().indexOf('firefox ') > -1) {
                        return 'firefox';
                    }
                    if (browserVersion.toLowerCase().indexOf('ie ') > -1 || browserVersion.toLowerCase().indexOf('edge') > -1) {
                        return 'internet-explorer';
                    }
                }

                scope.browserName = getBrowserName();
            }
        };
    }

})(angular.module('logForest'));