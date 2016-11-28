var app = angular.module('manage.managePortfolio', [
    'requestService'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/managePortfolio', {
        templateUrl: 'templates/managePortfolio.tpl.html',
        controller: 'managePortfolioController'
    })
});

app.controller('managePortfolioController', function($scope, request) {
    $scope.portfolio = [];

    $scope.getProjects = function() {
        request.fetchCmsPortfolio(function(response) {
            //good call
            $scope.portfolio = response.data;
        }, function(response) {
            //bad call
            console.log(response);
        })
    };

    $scope.postToPortfolio = function() {
        request.postCmsblog({
            title: $scope.newPostTitle,
            date: $scope.newPostDate,
            post: $scope.newPostPost
        }, function(response) {
            //good call
            console.log(response);
            $scope.getBlogPosts()
        }, function(response) {
            //bad call
            console.log(response);
        })
    }

    $scope.getProjects();
});