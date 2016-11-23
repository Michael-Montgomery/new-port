var app = angular.module('manage.login', []);

app.config(function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.tpl.html',
        controller: 'loginController'
    })
});

app.controller('loginController', function($scope) {
    $scope.message = 'login'
});