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
        request.postCmsPortfolio({
            title: $scope.title,
            description: $scope.description,
            imgUrl: $scope.imgUrl,
            url: $scope.url
        }, function(response) {
            //good call
            console.log('good call tripped')
            $scope.getProjects()
        }, function(response) {
            //bad call
            console.log('bad call tripped')
            console.log(response);
        })
    }

    $scope.deleteProject = function(idx) {
        request.deletePortfolioItem($scope.portfolio[idx], function(response) {
            $scope.portfolio = response.data;
        }, function(response) {
            console.log(response)
        })
    }

    $scope.getProjects();
});