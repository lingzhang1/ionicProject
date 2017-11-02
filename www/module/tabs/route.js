(function(angular){
  var app=angular.module('tabs.route',[]);
  //抽象路由模块
  app.config(function($stateProvider){
    $stateProvider.state('tabs',{
       url:'/tabs',
       abstract:true,
       templateUrl:'./module/tabs/view.html'
    });
  });
})(angular);
