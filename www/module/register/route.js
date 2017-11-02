(function(angular){
  var app=angular.module('register.route',[
    'register.controllers']);
  app.config(function($stateProvider){
    $stateProvider.state('tabs.register',{
      url:'/register',
      views:{
        //account login register共同使用'tabs-account'模板
        'tabs-account':{
          templateUrl:'module/register/view.html',
          controller:'registerCtrl'
        }
      }
    });
  });
})(angular);
