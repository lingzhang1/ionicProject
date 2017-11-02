(function(angular){
  var app=angular.module('login.route',[
    'login.controllers']);
  app.config(function($stateProvider){
    $stateProvider.state('tabs.login',{
      url:'/login',
      views:{
        //account login register共同使用'tabs-account'模板
        'tabs-account':{
          templateUrl:'module/login/view.html',
          controller:'loginCtrl'
        }
      }
    });
  });
})(angular);
