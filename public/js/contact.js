var app = angular.module('port.contact', []);

app.config(function($routeProvider) {
    $routeProvider.when('/contact', {
        templateUrl: 'templates/contact.tpl.html',
        controller: 'contactController'
    })
});

app.controller('contactController', function($scope) {
    document.title = 'Michael Montgomery | Contact';
})