require('angular');

//init angular main module
angular.module('plastikaApp', [
    'bootstrap',
    'angular-route'
])
    .controller('headerCtrl', function($scope) {
        $scope.name = "Plastika";
    });

angular.bootstrap(document, ['angular.bootstrap'], {
    strictDi: true
});