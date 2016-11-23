var app = angular.module('manage', [
    'ngRoute',
    'manage.login',
    'manage.contacts',
    'manage.manageBlog',
    'manage.managePortfolio'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/contacts'
    }).otherwise({
        redirectTo: '/login'
    })
});