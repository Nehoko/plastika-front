var angular = require('angular');

//init angular main module
var module = angular.module('angular.bootstrap', [ 'ui.bootstrap' ]);

angular.bootstrap(document, ['angular.bootstrap'], {
    strictDi: true
});