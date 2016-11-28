var app = angular.module('request', []);

app.service('requestService', function($http) {
    this.fetchBlog = function(succFunc, failFunc) {
        $http.get('http://localhost:8080/blog').then(succFunc, failFunc)
    }
    this.fetchPortfolio = function(succFunc, failFunc) {
        $http.get('http://localhost:8080/portfolio').then(succFunc, failFunc);
    }
})

