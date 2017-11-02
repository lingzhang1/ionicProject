(function(angular){
  var app=angular.module('cart.route',[
    'cart.controllers']);
  app.config(function($stateProvider){
    $stateProvider.state('cart',{
      url:'/cart',
      templateUrl:'module/cart/view.html',
      controller:'cartCtrl'
    });
  });
})(angular);
