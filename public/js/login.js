var app = angular.module('port.login', [
    'request'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/sesame', {
        templateUrl: 'templates/login.tpl.html',
        controller: 'loginController'
    })
});

app.controller('loginController', function($scope, requestService) {
    $('#auth-butt').click(function() {
            requestService.checkPass({
                username: $scope.email,
                password: $scope.pass
            }, function(response) {
                //good call
                window.location.assign('#/manageBlog');
            }, function() {
                //bad call
                alert('nope')
            })
    })
})