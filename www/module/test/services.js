(function(angular){
  var app=angular.module('test.service',[]);
  app.factory('testFactory',function(){
    return {
      'test':'factory'
    }
  });
})(angular);
