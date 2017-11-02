(function(angular){
  var app=angular.module('goodList.route',[
    'goodList.controllers']);
  app.config(function($stateProvider){
    // 此路由模块的goodList的变量杨蓓home模块的view使用，所以必须要把goodList.route添加到总路由route.js中
    $stateProvider.state('tabs.goodList',{
      url:'/goodList',
      views:{
        'tabs-goodList':{
          templateUrl:'module/goodList/view.html',
          controller:'goodListCtrl'
        }
      }
    });
  });
})(angular);
