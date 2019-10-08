<?php
/**
 * Created by PhpStorm.
 * User: iron
 * Date: 2018/5/16
 * Time: 14:42
 */
?>
<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
 <!--   // 注意：所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
  // 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
  // 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html -->
  <script>
    wx.config({
        debug: false,
        appId: '<?php echo $config["appId"];?>',
        timestamp: <?php echo $config["timestamp"];?>,
        nonceStr: '<?php echo $config["nonceStr"];?>',
        signature: '<?php echo $config["signature"];?>',
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
      			'onMenuShareAppMessage',
      			'onMenuShareQQ',
      			'onMenuShareWeibo',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            //      'translateVoice',
            //      'startRecord',
            //      'stopRecord',
            //      'onRecordEnd',
            //      'playVoice',
            //      'pauseVoice',
            //      'stopVoice',
            //      'uploadVoice',
            //      'downloadVoice',
            //      'chooseImage',
            //      'previewImage',
            //      'uploadImage',
            //      'downloadImage',
            //      'getNetworkType',
            //      'openLocation',
            //      'getLocation',
                  'hideOptionMenu'
            //      'showOptionMenu',
            //      'closeWindow',
            //      'scanQRCode',
            //      'chooseWXPay',
            //      'openProductSpecificView',
            //      'addCard',
            //      'chooseCard',
            //      'openCard'
        ]
    });
</script>

<script type="text/javascript">
   wx.ready(function () {
        wx.checkJsApi({
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage'
            ],
            success: function (res) {
            }
        });
        // 分享给朋友
        wx.onMenuShareAppMessage({
          title: '分享标题',
          desc: '',
          link: 'http://kcshop.kuaichuangkeji.com',
          imgUrl: '',
          trigger: function (res) {
            // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
            // alert('用户点击发送给朋友');
          },
          success: function (res) {
            alert('已分享');
          },
          cancel: function (res) {
            // alert('已取消');
          },
          fail: function (res) {
            // alert(JSON.stringify(res));
          }
        });

</script>