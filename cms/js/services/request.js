var app = angular.module('requestService', []);

app.service('request', function($http) {
    this.fetchCmsblog = function(succFunc, failFunc) {
        $http.get('http://localhost:8080/blog').then(succFunc, failFunc)
    };
    this.fetchCmsPortfolio = function(succFunc, failFunc) {
        $http.get('http://localhost:8080/portfolio').then(succFunc, failFunc)
    };
    this.postCmsBlog = function(data, succFunc, failFunc) {
        $http.post('http://localhost:8080/blog', data).then(succFunc, failFunc)
    };
    this.postCmsPortfolio = function(data, succFunc, failFunc) {
        $http.post('http://localhost:8080/portfolio', data).then(succFunc, failFunc)
    };
    this.deleteBlogPost = function(data, succFn, failFn) {
        $http.delete('http://localhost:8080/blog/' + data._id, data).then(succFn, failFn)
    };
    this.deletePortfolioItem = function(data, succFn, failFn) {
        $http.delete('http://localhost:8080/blog/' + data._id, data).then(succFn, failFn);
    }
})