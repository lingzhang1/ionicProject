(function(angular){
  var app=angular.module('test.controllers',[]);
  app.controller('testCtrl',['$scope','testFactory',function($scope,testFactory){
    // $scope.test='test';
    // console.log(testFactory.test);
  }]);
})(angular);
