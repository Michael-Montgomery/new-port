var app = angular.module('port.welcome', []);

app.config(function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'templates/welcome.tpl.html',
        controller: 'welcomeController'
    })
});

app.controller('welcomeController', function($scope) {
    $(window).scroll(function() {
        if($(window).scrollTop() === 0) {
            $('.welcome-header').css('background-color', 'black');
            $('.welcome-header nav a').css('color', 'white');
        } else {
            $('.welcome-header').css('background-color', 'white');
            $('.welcome-header nav a').css('color', 'black')
        }
    })
})