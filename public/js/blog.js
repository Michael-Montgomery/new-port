var app = angular.module('port.blog', [
    'request'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/blog', {
        templateUrl: 'templates/blog.tpl.html',
        controller: 'blogController'
    })
});

app.controller('blogController', function($scope, requestService) {
    document.title = 'Michael Montgomery | Blog';
    $(window).scroll(function() {
        if($(window).scrollTop() === 0) {
            $('.blog-header').css('background-color', 'white');
            $('.blog-header nav a').css('color', 'black');
        } else {
            $('.blog-header').css('background-color', 'black').css('opacity', '.8')
            $('.blog-header nav a').css('color', 'white');
        };
        $('.blog-header').mouseover(function() {
            $('.blog-header').css('opacity', '1')
        }).mouseout(function() {
            $('.blog-header').css('opacity', '.8')
        })
    })



    $scope.posts = [];
    $scope.getPosts = function() {
        requestService.fetchBlog(function(response) {
          //good func
            $scope.posts = response.data;
        }, function(response) {
            //bad func
            console.log(response)
        })
    };

    $scope.getPosts();

    $scope.triggered = function(idx) {
        alert(idx);
    }

})