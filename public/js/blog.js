var app = angular.module('port.blog', []);

app.config(function($routeProvider) {
    $routeProvider.when('/blog', {
        templateUrl: 'templates/blog.tpl.html',
        controller: 'blogController'
    })
});

app.controller('blogController', function($scope) {
    $(window).scroll(function() {
        if($(window).scrollTop() === 0) {
            $('.blog-header').css('background-color', 'white');
            $('.blog-header nav a').css('color', 'black');
        } else {
            $('.blog-header').css('background-color', 'black').css('opacity', '.8')
            $('.blog-header nav a').css('color', 'white');
        };
        $('.blog-header').mouseover(function() {
            $('.blog-header').css('opacity', '1')
        }).mouseout(function() {
            $('.blog-header').css('opacity', '.8')
        })
    })







    $scope.posts = [
        {
            title: 'Sample Title',
            date: new Date(),
            post: 'The app also lets people pre-select withdrawal amounts ahead of time. After typing in the pin number,' +
            ' the user will have 30 seconds to tap their phone against the ATMs NFC-enabled spot to complete the transaction.'
        },
        {
            title: 'Sample Title',
            date: new Date(),
            post: 'The app also lets people pre-select withdrawal amounts ahead of time. After typing in the pin number,' +
            ' the user will have 30 seconds to tap their phone against the ATMs NFC-enabled spot to complete the transaction.'
        },
        {
            title: 'Sample Title',
            date: new Date(),
            post: 'The app also lets people pre-select withdrawal amounts ahead of time. After typing in the pin number,' +
            ' the user will have 30 seconds to tap their phone against the ATMs NFC-enabled spot to complete the transaction.'
        },
        {
            title: 'Sample Title',
            date: new Date(),
            post: 'The app also lets people pre-select withdrawal amounts ahead of time. After typing in the pin number,' +
            ' the user will have 30 seconds to tap their phone against the ATMs NFC-enabled spot to complete the transaction.'
        },
        {
            title: 'Sample Title',
            date: new Date(),
            post: 'The app also lets people pre-select withdrawal amounts angular ahead of time. After typing in the pin number,' +
            ' the user will have 30 seconds to tap their phone against the ATMs NFC-enabled spot to complete the transaction.'
        },
        {
            title: 'Sample Title',
            date: new Date(),
            post: 'The app also lets people pre-select withdrawal amounts wmtek ahead of time. After typing in the pin number,' +
            ' the user will have 30 seconds to tap their phone against the ATMs NFC-enabled spot to complete the transaction.'
        },
        {
            title: 'Sample Title',
            date: new Date(),
            post: 'The app also lets people pre-select withdrawal amounts google ahead of time. After typing in the pin number,' +
            ' the user will have 30 seconds to tap their phone against the ATMs NFC-enabled spot to complete the transaction.'
        },
        {
            title: 'Sample Title',
            date: new Date(),
            post: 'The app also lets people pre-select withdrawal mike amounts ahead of time. After typing in the pin number,' +
            ' the user will have 30 seconds to tap their phone against the ATMs NFC-enabled spot to complete the transaction.'
        },
        {
            title: 'Sample Title',
            date: new Date(),
            post: 'The app also lets people pre-select apple withdrawal amounts ahead of time. After typing in the pin number,' +
            ' the user will have 30 seconds to tap their phone against the ATMs NFC-enabled spot to complete the transaction.'
        },
        {
            title: 'Sample Title',
            date: new Date(),
            post: 'The app also lets people pre-select  apple withdrawal amounts ahead of time. After typing in the pin number,' +
            ' the user will have 30 seconds to tap their phone against the ATMs NFC-enabled spot to complete the transaction.'
        }
    ];

    $scope.triggered = function(idx) {
        alert(idx);
    }

})