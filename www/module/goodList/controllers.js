(function (angular) {
  var app=angular.module('goodList.controllers',
    [
      'goodList.services'
    ]);
  app.controller('goodListCtrl',function ($scope,goodListFactory) {
    // 第一次加载数据
    refreshGoodsList();
    function refreshGoodsList() {
      $scope.obj_goodsListData = goodListFactory.getDataList();
      $scope.newData=goodListFactory.getDataList();
    };
    // 刷新商品列表
    $scope.refreshGoodsList=function(){
      refreshGoodsList();
      // 广播，通知ionic去隐藏下拉刷新的标签
      $scope.$broadcast('scroll.refreshComplete');
    }
    // $scope.newData;
    // 上拉加载
    $scope.loadMoreGoodsList=function(){
      //在公司开发的时候是去获取分页数据
      var newData= goodListFactory.getMoreDataLise();

       setTimeout(function () {
        $scope.obj_goodsListData = $scope.obj_goodsListData.concat(newData);
       },5000);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }
  })
})(angular);
