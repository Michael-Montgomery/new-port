var app = angular.module('manage.contacts', [
    'requestService'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/contacts', {
        templateUrl: 'templates/contacts.tpl.html',
        controller: 'contactsController'
    })
});

app.controller('contactsController', function($scope, request) {
    $scope.contacts = [];

    $scope.getLeads = function() {
        request.fetchLeads(function(response) {
            $scope.contacts = response.data;
        }, function(response) {
            console.log(response)
        })
    }


    $scope.getLeads()
});