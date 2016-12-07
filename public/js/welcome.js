var app = angular.module('port.welcome', []);

app.config(function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'templates/welcome.tpl.html',
        controller: 'welcomeController'
    })
});

app.controller('welcomeController', function($scope) {
    var menuTicker = 2;
    document.title = 'Michael Montgomery';
    $(window).scroll(function() {
        if($(window).scrollTop() === 0) {
            $('.welcome-header').css('background-color', 'black');
            $('.welcome-header nav a').css('color', 'white');
        } else {
            $('.welcome-header').css('background-color', 'white');
            $('.welcome-header nav a').css('color', 'black')
        }
    });
    $('#left-dual-div').mouseover(function() {
        $('#left-dual-div').css('width', '80%').css('background-position', 'center');
        $('#right-dual-div').css('width', '19%');
        $('.dual-div h2').fadeOut();
        $('#left-dual-div p').fadeIn();
    }).mouseleave(function() {
        $('#left-dual-div, #right-dual-div').css('width', '49%');
        $('.dual-div h2').fadeIn('slow');
        $('#left-dual-div p').fadeOut();

    });
    $('#right-dual-div').mouseover(function() {
        $('#right-dual-div').css('width', '80%').css('background-position', 'center');
        $('#left-dual-div').css('width', '19%');
        $('.dual-div h2').fadeOut();
        $('#right-dual-div p').fadeIn();
    }).mouseleave(function() {
        $('#left-dual-div, #right-dual-div').css('width', '49%');
        $('.dual-div h2').fadeIn('slow');
        $('#right-dual-div p').fadeOut();

    });

    $scope.showMenu = function() {
        if(menuTicker % 2 === 0) {
            $('#welcome-footer').css('height', '500px');
            menuTicker++;
            $('.welcome-header nav a:last-child').html('<i class="fa fa-times" aria-hidden="true"></i>')
        } else {
            $('#welcome-footer').css('height', '0');
            menuTicker++;
            $('.welcome-header nav a:last-child').html('<i class="fa fa-bars" aria-hidden="true"></i>')
        }
    }





    $scope.goToContact = function() {
        window.location.assign('#/contact');
    }
})