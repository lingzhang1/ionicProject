(function (angular) {
  var app=angular.module('details.controllers',
    [
      'details.services'
    ]);
  app.controller('detailsCtrl',function ($scope,detailsFactory) {
    //获取详细信息
    var detailsData=detailsFactory.detailsData();
    $scope.detailsData=detailsData;
    //获取图片数据
    var detailsImgData=detailsFactory.detailsImgData();
    $scope.detailsImgData=detailsImgData;
  })
})(angular);
