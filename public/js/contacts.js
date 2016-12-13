var app = angular.module('port.contacts', [
    'request'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/contacts', {
        templateUrl: 'templates/contacts.tpl.html',
        controller: 'contactsController'
    })
});

app.controller('contactsController', function($scope, requestService) {
    $scope.contacts = [];

    $scope.getLeads = function() {
        requestService.fetchLeads(function(response) {
            $scope.contacts = response.data;
        }, function(response) {
            console.log(response)
        })
    }


    $scope.getLeads()
});