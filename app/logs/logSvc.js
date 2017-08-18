(function (app) {

    app.factory('logService', ['$http', '$q', logService]);


    function logService($http, $q, logService) {
        return {
            get: get
        };

        function get() {
            return $http.get('//localhost:8080/api/1.0.0/logs')
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