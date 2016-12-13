var app = angular.module('port.login', [
    'request'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/sesame', {
        templateUrl: 'templates/login.tpl.html',
        controller: 'loginController'
    })
});

app.controller('loginController', function($scope, requestService) {

})