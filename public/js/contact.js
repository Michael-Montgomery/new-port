var app = angular.module('port.contact', [
    'request'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/contact', {
        templateUrl: 'public/views/templates/contact.tpl.html',
        controller: 'contactController'
    })
});

app.controller('contactController', function($scope, requestService) {
    document.title = 'Michael Montgomery | Contact';
    var menuTicker = 2;
    $scope.showMenu = function() {
        if(menuTicker % 2 === 0) {
            $('#contact-footer').css('height', '500px');
            menuTicker++;
            $('.contact-header nav a:last-child').html('<i class="fa fa-times" aria-hidden="true"></i>')
        } else {
            $('#contact-footer').css('height', '0');
            menuTicker++;
            $('.contact-header nav a:last-child').html('<i class="fa fa-bars" aria-hidden="true"></i>')
        }
    };

    $scope.sendContact = function() {
       requestService.sendForm({
           date: new Date(),
           firstName: $('#firstName').val(),
           lastName: $('#lastName').val(),
           company: $('#co').val(),
           phone: $('#phone').val(),
           email: $('#email').val(),
           website: $('#url').val(),
           message: $('#message').val()
       }, function(){
           $('#contact-form-wrapper').empty();
           $('#contact-form-wrapper').css('padding', '20%').append('<h3>Thank you!</h3>').addClass('thanks').append(
               '<p>You message was sent</p>'
           ).addClass('tinyThanks');
           setTimeout(function() {
             window.location.assign('#/welcome')
           }, 3500)


       }, function(response){
           console.log(response)
       })
    }
})