var app = angular.module('manage.contacts', []);

app.config(function($routeProvider) {
    $routeProvider.when('/contacts', {
        templateUrl: 'templates/contacts.tpl.html',
        controller: 'contactsController'
    })
});

app.controller('contactsController', function($scope) {
    $scope.contacts = [
        {
            date: new Date(),
            firstName: 'Dan',
            lastName: 'Rivers',
            company: 'nance cacciatore',
            phone: '3217777777',
            email: 'me@you.com',
            url: 'yourmom.com',
            details: 'we need a new website'
        },
        {
            date: new Date(),
            firstName: 'Dan',
            lastName: 'Rivers',
            company: 'nance cacciatore',
            phone: '3217777777',
            email: 'me@you.net',
            url: 'yourmom.com',
            details: 'The app also lets people pre-select withdrawal amounts ahead of time. After typing in the pin ' +
            'number, the user will have 30 seconds to tap their phone against the ATMs NFC-enabled spot to complete the transaction.'
        },
        {
            date: new Date(),
            firstName: 'Dan',
            lastName: 'Rivers',
            company: 'nance cacciatore',
            phone: '3217777777',
            email: 'me@you.com',
            url: 'yourmom.com',
            details: 'we need a super website'
        },
        {
            date: new Date(),
            firstName: 'jon',
            lastName: 'Rivers',
            company: 'nance cacciatore',
            phone: '3217777777',
            email: 'me@you.com',
            url: 'yourmom.com',
            details: 'we need a new website'
        },
        {
            date: new Date(),
            firstName: 'Dan',
            lastName: 'Rivers',
            company: 'nance cacciatore',
            phone: '3217777777',
            email: 'me@you.com',
            url: 'yourmom.com',
            details: 'we need a new website'
        }
    ]
});