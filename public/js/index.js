var app = angular.module('port', [
    'ngRoute',
    'port.welcome'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/welcome'
    }).otherwise({
        redirectTo: '/welcome'
    })
});