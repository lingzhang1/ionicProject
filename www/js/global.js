//全局模块
(function(angular){
  var app=angular.module('starter.global',[]);
  app.constant('GLOBAL_VALUE',{
    'VERSION':'1.0.0',
    'SERVER_PATH':'www.baidu.com'
  });
})(angular);
