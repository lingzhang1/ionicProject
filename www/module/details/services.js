(function(angular){
  var app=angular.module('details.services',[]);
  app.factory('detailsFactory',function(){
    return {
      detailsImgData:function(){
        return [{
          alt: "精品享受，值得拥有",
          src: "img/details/details1.jpg",
          typeNumber:'10013'
        }, {
          alt: "精品享受，值得拥有",
          src: "img/details/details2.jpg",
          typeNumber:'10014'
        }, {
          alt: "精品享受，值得拥有",
          src: "img/details/details3.jpg",
          typeNumber:'10015'
        }, {
          alt: "精品享受，值得拥有",
          src: "img/details/details4.jpg",
          typeNumber:'10016'
        }, {
          alt: "精品享受，值得拥有",
          src: "img/details/details5.jpg",
          typeNumber:'10017'
        }, {
          alt: "精品享受，值得拥有",
          src: "img/details/details6.jpg",
          typeNumber:'10018'
        }, {
          alt: "精品享受，值得拥有",
          src: "img/details/details7.jpg",
          typeNumber:'10019'
        }];
      },
      detailsData:function(){
        return {
          bigImg:[{
            alt: "精品享受，值得拥有",
            src: "img/details/details7.jpg",
            typeNumber:'10019'
          }],
          smallImg:[{
            alt: "精品享受，值得拥有",
            src: "img/details/details7.jpg",
            typeNumber:'10019'
          }],
          details:{
            explain:'COACH 蔻驰 全皮单肩包手提包托特包女包 37785 粉红色',
            oldPay:1659.0,
            nowPay:1235.0
          }
        };
      }
    }
  });
})(angular);
