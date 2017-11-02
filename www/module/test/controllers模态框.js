(function(angular){
  var app=angular.module('test.controllers',[]);
  app.controller('testCtrl',['$scope','$ionicModal','testFactory',function($scope,$ionicModal,testFactory){
    $scope.contacts = [
    { name: 'Gordon Freeman' },
    { name: 'Barney Calhoun' },
    { name: 'Lamarr the Headcrab' },
  ];

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.createContact = function(u) {
    $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
    $scope.modal.hide();
  };
  }]);
})(angular);
