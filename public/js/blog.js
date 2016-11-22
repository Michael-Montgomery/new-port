var app = angular.module('port.blog', []);

app.config(function($routeProvider) {
    $routeProvider.when('/blog', {
        templateUrl: 'templates/blog.tpl.html',
        controller: 'blogController'
    })
});

app.controller('blogController', function($scope) {
    $scope.message = 'blog';
})