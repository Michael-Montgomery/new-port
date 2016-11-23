var app = angular.module('port.portfolio', []);

app.config(function($routeProvider) {
    $routeProvider.when('/portfolio', {
        templateUrl: 'templates/portfolio.tpl.html',
        controller: 'portfolioController'
    })
});

app.controller('portfolioController', function($scope) {

    $(window).scroll(function() {
        if($(window).scrollTop() === 0) {
            $('.portfolio-header').css('background-color', 'white');
            $('.portfolio-header nav a').css('color', 'black');
        } else {
            $('.portfolio-header').css('background-color', 'black').css('opacity', '.8')
            $('.portfolio-header nav a').css('color', 'white');
        };
        $('.portfolio-header').mouseover(function() {
            $('.portfolio-header').css('opacity', '1')
        }).mouseout(function() {
            $('.portfolio-header').css('opacity', '.8')
        })
    });

    $scope.goToUrl = function(idx) {
        window.open($scope.portfolio[idx].url)
    }
    
    
    
    $scope.portfolio = [
        {
            title: "Mustard's Last Stand",
            url: 'http://www.mustardslaststand.us',
            description: "Mustard's Last Stand is a Melbourne, Florida based hot dog restaurant.",
            imgUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--MyzQPOqi--/c_scale,fl_progressive,q_80,w_800/1495521693809802643.jpg'
        },
        {
            title: "Lovebug's Bakery",
            url: 'http://www.lovebugsbakery.com',
            description: "Lovebug's bakery is a Melbourne, Florida-based restaurant specializing in ridiculously delicious cupcakes.",
            imgUrl: 'https://static.pexels.com/photos/9782/food-colorful-dessert-sweet.jpg'
        },
        {
            title: "Luna",
            url: 'http://www.mustardslaststand.us',
            description: "Luna Marie is a model specializing in tattoo-focused projects.",
            imgUrl: 'http://i.imgur.com/zrV2glv.jpg'
        },
        {
            title: "Yeti",
            url: 'http://www.mustardslaststand.us',
            description: "Yeti is a manufacturer of ultra-insulated drinkware.",
            imgUrl: 'https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/630/354/75/wdpromedia.disney.go.com/media/wdpro-assets/things-to-do/more/sports-and-recreation-centers/campfires/campfires-09.jpg?24092014074854'
        }
    ];
})