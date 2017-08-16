(function (app) {

    app.constant('browsers', [
        {
            name: "Internet Explorer",
            fontAwesomeIconClass: "fa-internet-explorer",
            aliases: ['edge']
        },
        {
            name: "Firefox",
            fontAwesomeIconClass: "fa-firefox",
            aliases: []
        },
        {
            name: "Chrome",
            fontAwesomeIconClass: "fa-chrome",
            aliases: []
        }
    ]);

})(angular.module('logForest'));