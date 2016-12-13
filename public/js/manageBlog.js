var app = angular.module('port.manageBlog', [
    'request'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/manageBlog', {
        templateUrl: 'templates/manageBlog.tpl.html',
        controller: 'manageBlogController'
    })
});

app.controller('manageBlogController', function($scope, requestService) {
    $scope.blogPosts = [];
    $scope.getBlogPosts = function() {
        requestService.fetchBlog(function(response) {
            //good call
            $scope.blogPosts = response.data;
            console.log(response.data)
        }, function(response) {
            //bad call
            console.log(response)
        })
    };
    $scope.postToBlog = function() {
        requestService.postCmsBlog({
            title: $scope.newPostTitle,
            date: $scope.newPostDate,
            post: $scope.newPostPost
        }, function(response) {
            //good call
            $scope.getBlogPosts()
        }, function(response) {
            //bad call
            console.log(response);
        })
    };

    $scope.deleteBlogPost = function(idx) {
        requestService.deleteBlogPost($scope.blogPosts[idx], function(response) {
            //good call
            $scope.blogPosts = response.data;
        }, function(response) {
            console.log(response)
        })
    };
    $scope.getBlogPosts();
});