(function(angular){
  var app=angular.module('home.controllers',[]);
  app.controller('homeCtrl',['$scope','homeFactory','$interval',function($scope,homeFactory,$interval){
    //获取轮播头数据
    var headerSlideData=homeFactory.headerSlideData();
    $scope.headerSlideData=headerSlideData;
    //获取秒杀图片数据
    var miaoshaData=homeFactory.miaoshaData();
    $scope.miaoshaData=miaoshaData;
    //获取广告1数据
    var advertisementData=homeFactory.advertisementData();
    $scope.advertisementData=advertisementData;
    //获取主题街数据
    var streatData=homeFactory.streatData();
    $scope.streatData=streatData;
     //获取广告2数据
    var advertisementData2=homeFactory.advertisementData2();
    $scope.advertisementData2=advertisementData2;
    //ino-view加载完以后再执行轮播图
    $scope.$on("$ionicView.enter", function(event, data){
      headerSlide();
      toutiaoSlide();
      topColorChange();
      goTop();
    });
    // 头部轮播图
    function headerSlide(){
      var mySwiper = new Swiper('#headerSlider', {
        autoplay: 3000,//可选选项，自动滑动
        paginationType:'bullets',
        pagination : '.swiper-pagination',
        loop : true
      });
    };
    // 头条轮播图
    function toutiaoSlide(){
      var mySwiper = new Swiper('#toutiaoSlider', {
        autoplay: 3000,//可选选项，自动滑动
        direction:'vertical'
      });
    };
    timeKill();
    //限时秒杀
    function timeKill() {
      //限时时间
      var timeLeft={h:01,m:30,s:00};
      //循环递减，按照每一秒减一秒
      $interval(function () {
        if(timeLeft.s>0){
          timeLeft.s--;
        }else{
          if(timeLeft.m>0){
            timeLeft.m--;
            timeLeft.s=59;
          }else{
            if(timeLeft.h>0){
              timeLeft.h--;
              timeLeft.m=59;
              timeLeft.s=59;
            }
          }
        }
        $scope.hour={
          A:getTime().A(timeLeft.h),
          B:getTime().B(timeLeft.h),
        };
        $scope.minute={
          A:getTime().A(timeLeft.m),
          B:getTime().B(timeLeft.m),
        };
        $scope.second={
          A:getTime().A(timeLeft.s),
          B:getTime().B(timeLeft.s),
        };
       // console.log(timeLeft);
      },1000);
    }
    //处理十位和个位数值
    function getTime() {
      return {
        A:function (time) {
          //处理十位数 18
          if(time>=10){
           return parseInt(time/10);
          }else{
            return 0;
          }
        },
        B:function (time) {
          //处理个位数
          return time%10
        }
      }
    }
    //头部渐变色
    function topColorChange(){
      // 注册滚动事件
      var content = document.getElementById('home-content');
      var headBar = document.getElementById('headerBar-bg');
      var nowOpacity = 0;
      content.onscroll=function(){
        // this.scrollTop 得到滚动条的高度
        // 500 nowOpacity 1
        nowOpacity = this.scrollTop/500;// 根据页面滚动的高度得到透明度
        headBar.style.opacity=nowOpacity;
      }
    }
    //回到顶部功能
    function goTop(){
      // 注册滚动
      var content = document.getElementById('home-content');
      var goTop = document.querySelector('.back_top');

      // 这里不要再用=了
      content.addEventListener('scroll',function(){

        if(this.scrollTop>=250){
          goTop.style.display='block';
          goTop.style.opacity=1;
        }else{
          goTop.style.display='none';
        }
      });
      // 注册点击事件，滚动到顶部。
      goTop.onclick=function(){
        content.scrollTop=0;
      }
    }
  }]);
})(angular);
