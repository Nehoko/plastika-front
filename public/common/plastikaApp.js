var router = require('angular-route');

//init angular main module
var plastikaApp = angular.module('App', [
    'ui.bootstrap',
    'ngRoute'
]);

plastikaApp.service('Api', [$http, ApiService]);

if (getParameterByName("token") !== "") {
    sessionStorage.setItem("token", getParameterByName("token"));
    location.search = "";
}

function getParameterByName(name) {
    name = name.replace(/[\[]/,"\\[").replace(/[\]]/, "\\");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('grid', {
            templateUrl
        })
};

angular.bootstrap(document, ['angular.bootstrap'], {
    strictDi: true
});