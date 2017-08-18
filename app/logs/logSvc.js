(function (app) {

    app.factory('logService', ['$http', '$q', 'logConstants', logService]);


    function logService($http, $q, constants) {
        return {
            get: get
        };

        function get() {
            return $http.get(constants.apiRoot + '/logs')
                .then(logServiceResponseData)
                .catch(logServiceResponseError);
        }

        function logServiceResponseData(response) {
            console.log('res', response);
            return response.data;
        }

        function logServiceResponseError(msg) {
            console.error('Error: ',  msg);
        }
    }

})(angular.module('logForest'));