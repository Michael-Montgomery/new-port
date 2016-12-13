var app = angular.module('request', []);

app.service('requestService', function($http) {
    this.fetchBlog = function(succFunc, failFunc) {
        $http.get('http://localhost:8080/blog').then(succFunc, failFunc)
    };
    this.fetchPortfolio = function(succFunc, failFunc) {
        $http.get('http://localhost:8080/portfolio').then(succFunc, failFunc);
    };
    this.sendForm = function(data, succFunc, failFunc) {
        $http.post('http://localhost:8080/contact', data).then(succFunc, failFunc)
    };
    this.fetchLeads = function(succFunc, failFunc) {
        $http.get('http://localhost:8080/contact').then(succFunc, failFunc)
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
        $http.delete('http://localhost:8080/portfolio/' + data._id, data).then(succFn, failFn);
    };
    this.checkPass = function(data, succFunc, failFunc) {
        $http.post('http://localhost:8080/admins/', data).then(succFunc, failFunc);
    }
});

