(function(angular){
  var app=angular.module('guidePage.controllers',[]);
  app.controller('guidePageCtrl',['$scope','$state',function($scope,$state){
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: 4000,//可选选项，自动滑动
      onSlideChangeEnd: function(swiper){
        // console.log(swiper.activeIndex) //每次切换时，提示现在是第几个slide
        //获取slide对应的dom对象
        var index=swiper.activeIndex+1;
        var tips=document.getElementById('tips-'+index);
        //利用angular操作DOM元素，jqSlite
        angular.element(tips).removeClass('hidden').addClass('guide-show');
        if (index==4) {
           document.cookie='guidePage=true';
          $state.go('tabs.home');
        }
      }
    });
    $scope.func_goHome=function(){
      //将guidePage存储，用于更改默认路由设置
      // 使用cookie，关闭浏览器，数据消失
      document.cookie='guidePage=true';
      //直接使用$state.go方法进行页面跳转
      $state.go('tabs.home');
    }
  }]);
})(angular);
