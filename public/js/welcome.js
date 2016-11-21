var app = angular.module('port.welcome', []);

app.config(function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'templates/welcome.tpl.html',
        controller: 'welcomeController'
    })
});

app.controller('welcomeController', function($scope) {

})