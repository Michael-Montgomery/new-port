var app = angular.module('port.contact', []);

app.config(function($routeProvider) {
    $routeProvider.when('/contact', {
        templateUrl: 'templates/contact.tpl.html',
        controller: 'contactController'
    })
});

app.controller('contactController', function($scope) {
    document.title = 'Michael Montgomery | Contact';
    var menuTicker = 2;
    $scope.showMenu = function() {
        if(menuTicker % 2 === 0) {
            $('#contact-footer').css('height', '500px');
            menuTicker++;
            $('.contact-header nav a:last-child').html('<i class="fa fa-times" aria-hidden="true"></i>')
        } else {
            $('#contact-footer').css('height', '0');
            menuTicker++;
            $('.contact-header nav a:last-child').html('<i class="fa fa-bars" aria-hidden="true"></i>')
        }
    }
})