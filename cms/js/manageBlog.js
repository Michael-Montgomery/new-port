var app = angular.module('manage.manageBlog', []);

app.config(function($routeProvider) {
    $routeProvider.when('/manageBlog', {
        templateUrl: 'templates/manageBlog.tpl.html',
        controller: 'manageBlogController'
    })
});

app.controller('manageBlogController', function($scope) {
    $scope.blogPosts = [
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
    ]
});