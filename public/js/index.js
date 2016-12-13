var app = angular.module('port', [
    'ngRoute',
    'port.welcome',
    'port.contact',
    'port.blog',
    'port.portfolio',
    'port.contacts',
    'port.login',
    'port.manageBlog',
    'port.managePortfolio'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/welcome'
    }).otherwise({
        redirectTo: '/welcome'
    })
});