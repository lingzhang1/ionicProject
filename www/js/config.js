//配置tab栏的位置
(function(angular){
  var app=angular.module('starter.config',[]);
  app.config(function($ionicConfigProvider){
      $ionicConfigProvider.platform.android.tabs.position("bottom");
      $ionicConfigProvider.platform.ios.tabs.position("bottom");
  })
})(angular);
