var app = angular.module('port.managePortfolio', [
    'request'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/managePortfolio', {
        templateUrl: 'public/views/templates/managePortfolio.tpl.html',
        controller: 'managePortfolioController'
    })
});

app.controller('managePortfolioController', function($scope, requestService) {
    $scope.portfolio = [];

    $scope.getProjects = function() {
        requestService.fetchPortfolio(function(response) {
            //good call
            $scope.portfolio = response.data;
        }, function(response) {
            //bad call
            console.log(response);
        })
    };

    $scope.postToPortfolio = function() {
        requestService.postCmsPortfolio({
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
    };

    $scope.deleteProject = function(idx) {
        requestService.deletePortfolioItem($scope.portfolio[idx], function(response) {
            $scope.portfolio = response.data;
        }, function(response) {
            console.log(response)
        })
    };

    $scope.getProjects();
});
