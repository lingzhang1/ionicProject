(function(angular){
  var app=angular.module('account.route',[
    'account.controllers']);
  app.config(function($stateProvider){
    $stateProvider.state('tabs.account',{
      url:'/account',
      views:{
        // 将模板添加到抽象路由tabs模板中的'tab-home'标签中
        'tabs-account':{
          templateUrl:'module/account/view.html',
          controller:'accountCtrl'
        }
      }
    });
  });
})(angular);
