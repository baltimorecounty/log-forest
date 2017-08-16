(function (app) {

    app.directive('browserFilterButtons', ['browsers', browserFilterButtons]);

    function browserFilterButtons(browsers) {
        return {
            restrict: 'E',
            templateUrl: 'components/browser/browser-filter-buttons.html',
            link: function (scope, element, attrs) {
                scope.browsers = browsers;
            }
        };
    }

})(angular.module('logForest'));