(function(angular){
  var app=angular.module('guidePage.route',[
    'guidePage.controllers']);
  app.config(function($stateProvider){
    $stateProvider.state('guide',{
      url:'/guide',
      templateUrl:'module/guidePage/view.html',
      controller:'guidePageCtrl'
    });
  });
})(angular);
