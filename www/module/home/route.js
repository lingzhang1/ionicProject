(function(angular){
  var app=angular.module('home.route',[
    'home.controllers',
    'home.services']);
  app.config(function($stateProvider){
    $stateProvider.state('tabs.home',{
      url:'/home',
      views:{
        // 将模板添加到抽象路由tabs模板中的'tab-home'标签中
        'tabs-home':{
          templateUrl:'module/home/view.html',
          controller:'homeCtrl'
        }
      }
    });
  });
})(angular);
