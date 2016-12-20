var app = angular.module('port.portfolio', [
    'request'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/portfolio', {
        templateUrl: 'public/views/templates/portfolio.tpl.html',
        controller: 'portfolioController'
    })
});

app.controller('portfolioController', function($scope, requestService) {
    document.title = 'Michael Montgomery | Portfolio';
    var menuTicker = 2;
    $(window).scroll(function() {
        if($(window).scrollTop() === 0) {
            $('.portfolio-header').css('background-color', 'white');
            $('.portfolio-header nav a').css('color', 'black');
        } else {
            $('.portfolio-header').css('background-color', 'black').css('opacity', '.8')
            $('.portfolio-header nav a').css('color', 'white');
        }
        $('.portfolio-header').mouseover(function() {
            $('.portfolio-header').css('opacity', '1')
        }).mouseout(function() {
            $('.portfolio-header').css('opacity', '.8')
        })
    });


    $scope.portfolio = [];

    $scope.updatePortfolio = function() {
        requestService.fetchPortfolio(function(response) {
            //good call
            $scope.portfolio = response.data
        }, function(response) {
            //bad call
            console.log(response);
        })
    };

    $scope.showMenu = function() {
        if(menuTicker % 2 === 0) {
            $('#portfolio-footer').css('height', '500px');
            menuTicker++;
            $('.portfolio-header nav a:last-child').html('<i class="fa fa-times" aria-hidden="true"></i>')
        } else {
            $('#portfolio-footer').css('height', '0');
            menuTicker++;
            $('.portfolio-header nav a:last-child').html('<i class="fa fa-bars" aria-hidden="true"></i>')
        }
    }

    $scope.updatePortfolio();


    $scope.goToUrl = function(idx) {
        window.open($scope.portfolio[idx].url)
    }
    
    
    

})