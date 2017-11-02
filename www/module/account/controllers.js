(function(angular){
  var app=angular.module('account.controllers',[]);
  app.controller('accountCtrl',[
    '$scope',
    '$window',
    '$ionicActionSheet',
    '$cordovaCamera',
    'GLOBAL_VALUE',function($scope,$window,$ionicActionSheet,$cordovaCamera,GLOBAL_VALUE){
      $scope.version=GLOBAL_VALUE.VERSION;
      // 退出
      $scope.exitApp=function(){
        // 这句话是执行退出app的操作
        ionic.Platform.exitApp();
      };
      // js拨打电话
      $scope.callPhone=function(number){
        $window.location.href="tel:"+number;
      };
      //localStorage.touxiang获取储存在本地的头像数据
      $scope.headPic="data:image/jpeg;base64,"+localStorage.touxiang;

      //打开相机
      $scope.showActionSheet = function() {
        $ionicActionSheet.show({
          buttons: [
            { text: '打开相机' },
            { text: '打开相册' }
          ],
          // index是buttons数据是按钮的索引
          buttonClicked: function(index) {
            switch (index) {
              case 0:
               getPicFromCamera();
                break;
              case 1:
                getPicFromAlbum();
                break;
            }
            return true;
          },
          cancelText: '取消'
        })
      };
      // 调用摄像机
      function getPicFromCamera(type) {
        // 参数
        var options = {
          quality: 100, // 图片质量
          destinationType: Camera.DestinationType.DATA_URL, // 读取到的图片的数据类型,读取图片为base64编码
          // sourceType: Camera.PictureSourceType.PHOTOLIBRARY,// 图片的来源的，这是表示相册
          sourceType: Camera.PictureSourceType.CAMERA, // 这个表示来源是相机
          allowEdit: true, // 是否允许编辑
          encodingType: Camera.EncodingType.JPEG, // 图片编码类型,jpeg
          targetWidth: 100, // 图片宽度
          targetHeight: 100, // 图片高度
          popoverOptions: CameraPopoverOptions, // 弹出框类型
          saveToPhotoAlbum: false, // 是否保存到相册
          correctOrientation: true // 是否允许调整方向
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {
          // imageData是图片base64编码后的数据
          // 获取页面的img对象
          var image = document.getElementById('touxiang');
          // 设置其src属性
          // base64编码
          image.src = "data:image/jpeg;base64," + imageData;

          // 存储到本地存储，
          localStorage["touxiang"] = imageData; // 是只能存储字符
          //localStorage.touxiang= imageData;
          // localStorage.setItem('touxiang',imageData);
        }, function(err) {
          // 此处是发生错误时的回调.
        });
      }
      // 调用相册
      function getPicFromAlbum() {
        // 参数
        var options = {
          quality: 100, // 图片质量
          destinationType: Camera.DestinationType.DATA_URL, // 读取到的图片的数据类型,读取图片为base64编码
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,// 图片的来源的，这是表示相册
          // sourceType: Camera.PictureSourceType.CAMERA, // 这个表示来源是相机
          allowEdit: true, // 是否允许编辑
          encodingType: Camera.EncodingType.JPEG, // 图片编码类型,jpeg
          targetWidth: 100, // 图片宽度
          targetHeight: 100, // 图片高度
          popoverOptions: CameraPopoverOptions, // 弹出框类型
          saveToPhotoAlbum: false, // 是否保存到相册
          correctOrientation: true // 是否允许调整方向
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {
          // imageData是图片base64编码后的数据
          // 获取页面的img对象
          var image = document.getElementById('touxiang');
          // 设置其src属性
          // base64编码
          image.src = "data:image/jpeg;base64," + imageData;

          // 存储到本地存储
          localStorage["touxiang"] = imageData; // 是只能存储字符
        }, function(err) {
          // 此处是发生错误时的回调.
        });
      }
  }]);
})(angular);
