(function(angular){
  var app=angular.module('home.services',[]);
  app.factory('homeFactory',function(){
    return {
      headerSlideData:function () {
        //通过ajax获取轮播图图片数据
        return  [{
          alt: "双十一预热主场会",
          src: "img/home/home-headerSlide-1.jpg",
          typeNumber:'10001'
        }, {
          alt: "11月11天家电低价不停歇",
          src: "img/home/home-headerSlide-2.jpg",
          typeNumber:'10002'
        }, {
          alt: "家具盛典 好货提前抢",
          src: "img/home/home-headerSlide-3.jpg",
          typeNumber:'10003'
        }, {
          alt: "IT抢券节",
          src: "img/home/home-headerSlide-4.jpg",
          typeNumber:'10004'
        }, {
          alt: "潮流数码 双11爽购攻略",
          src: "img/home/home-headerSlide-5.jpg",
          typeNumber:'10005'
        }];
      },
      miaoshaData:function(){
        return [{
          alt: "精品特价，限时抢购",
          src: "img/home/seckill_1.jpg",
          typeNumber:'10003',
          nowPay:666,
          oldPay:999
        },
        {
          alt: "精品特价，限时抢购",
          src: "img/home/seckill_2.jpg",
          typeNumber:'10004',
          nowPay:666,
          oldPay:999
        },
        {
          alt: "精品特价，限时抢购",
          src: "img/home/seckill_3.jpg",
          typeNumber:'10005',
          nowPay:666,
          oldPay:999
        }];
      },
      advertisementData:function(){
        return [{
          alt: "精品特价，限时抢购",
          src: "img/home/home-ad-1.jpg",
          typeNumber:'10006'
        },
        {
          alt: "精品特价，限时抢购",
          src: "img/home/home-ad-2.jpg",
          typeNumber:'10007'
        },
        {
          alt: "精品特价，限时抢购",
          src: "img/home/home-ad-3.jpg",
          typeNumber:'10008'
        }];
      },
      advertisementData2:function(){
        return [{
          alt: "精品特价，限时抢购",
          src: "img/home/home-ad-4.jpg",
          typeNumber:'10007'
        },
        {
          alt: "精品特价，限时抢购",
          src: "img/home/home-ad-5.jpg",
          typeNumber:'10008'
        },
        {
          alt: "精品特价，限时抢购",
          src: "img/home/home-ad-6.jpg",
          typeNumber:'10009'
        }];
      },
      streatData:function(){
         return {
          1:{
          alt: "精品特价，限时抢购",
          src: "img/home/cp1.jpg",
          typeNumber:'10010'
        },
        2:{
          alt: "精品特价，限时抢购",
          src: "img/home/cp2.jpg",
          typeNumber:'10011'
        },
        3:{
          alt: "精品特价，限时抢购",
          src: "img/home/cp3.jpg",
          typeNumber:'10012'
        }};
      }

    }
  });
})(angular);
