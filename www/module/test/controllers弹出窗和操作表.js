(function(angular){
  var app=angular.module('test.controllers',['ionic']);
  app.controller('testCtrl',['$scope','$ionicPopup', '$ionicActionSheet','testFactory',
    function($scope,$ionicPopup, $ionicActionSheet,testFactory){
    $scope.test='test';
    console.log(testFactory.test);
    //弹出框
     $scope.showPopup = function() {
       $scope.data = {};
       // 一个精心制作的自定义弹窗
       var myPopup = $ionicPopup.show({
         templateUrl: '<input type="password" ng-model="data.wifi">',
         title: 'Enter Wi-Fi Password',
         subTitle: 'Please use normal things',
         scope: $scope,
         buttons: [
           { text: 'Cancel' },
           {
             text: '<b>Save</b>',
             type: 'button-positive',
             onTap: function(e) {
               if (!$scope.data.wifi) {
                 //不允许用户关闭，除非他键入wifi密码
                 e.preventDefault();
               } else {
                 return $scope.data.wifi;
               }
             }
           },
         ]
       });
     };
     //操作表
    // 点击按钮触发，或一些其他的触发条件
     $scope.show = function() {
       // 显示操作表
       $ionicActionSheet.show({
         buttons: [
           { text: '<b>Share</b> This' },
           { text: 'Move' },
         ],
         destructiveText: 'Delete',
         titleText: 'Modify your album',
         cancelText: 'Cancel',
         buttonClicked: function(index) {
          console.log(index);
           return true;
         }
       });
     };
  }]);
})(angular);

