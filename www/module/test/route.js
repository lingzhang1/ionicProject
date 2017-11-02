(function(angular){
  var app=angular.module('test.route',
    ['test.controllers','test.service']);
  app.config(function($stateProvider){
    $stateProvider.state('test',{
      url:'/test',
      //以index为起始路径
      templateUrl:'module/test/view.html',
      controller:'testCtrl'
    })
  });
})(angular);
