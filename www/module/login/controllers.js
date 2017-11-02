(function(angular){
  var app=angular.module('login.controllers',[]);
  app.controller('loginCtrl',[
    '$scope',
    '$window',
    '$ionicActionSheet',
    '$cordovaCamera',
    'GLOBAL_VALUE',function($scope,$window,$ionicActionSheet,$cordovaCamera,GLOBAL_VALUE){
      $scope.version=GLOBAL_VALUE.VERSION;
      // 退出
      $scope.exitApp=function(){
        // 这句话是执行退出app的操作
        ionic.Platform.exitApp();
      };

  }]);
})(angular);
