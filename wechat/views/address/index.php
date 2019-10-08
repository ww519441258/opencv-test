<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
        <title>嘉荣83折线上体验店</title>
        <script>
            (function() {
                var docEl = document.documentElement;
                var resize = 'orientationchange' in window ? 'orientationchange' : 'resize';
                var setRem = function() {
    
                    var screenWidth = docEl.clientWidth || window.screen.width || 360;
                    // 1080 PSD宽度(可变的)
                    docEl.style.fontSize = (100 * screenWidth / 750) + 'px';
                };
                window.addEventListener('resize', setRem, false);
                setRem();
            })();
        </script>
        <link rel="stylesheet" href="/css/cube.min.css">
        <link rel="stylesheet" href="/css/ydd.css">
        <link rel="stylesheet" href="/css/cyc-zuj.css">
        <link rel="stylesheet" href="/css/address.css">
        <style>
            [v-cloak] {display: none;}
        </style>
        <script src="/js/vue.min.js"></script>
</head>
<body>
    <div class="app" v-cloak>
        <div class="app-top-nav">
            <!-- <i @touchstart="an0" @touchmove="an1" @touchend="fhFu"></i> -->
            <strong></strong>
            <span>新添地址</span>
            <strong></strong>
        </div>
        <div class="app-con">
            <label>
                <span>收货人姓名</span>
                <input type="text" placeholder="请输入收货人姓名" v-model="name">
            </label>
            <label>
                <span>电话号码</span>
                <input type="text" placeholder="请输入电话号码" v-model="phone">
            </label>
            <label @touchstart="an0" @touchmove="an1" @touchend="xzFu">
                <span>选择地址</span>
                <input type="text" placeholder="请输入选择地址" disabled="disabled" v-model="addr">
                <i></i>
            </label>
            <label>
                <span>详细地址</span>
                <input type="text" placeholder="请输入详细地址" v-model="addText">
            </label>
        </div>
        <div class="app-btn" @touchstart="an0" @touchmove="an1" @touchend="qrFu">确认</div>
    </div>
    <script type="text/javascript">
        function init_sju(a,b){
            //初始化数据
            //如果a没有值则把用户希望的b值赋值进去
            return a?a:b;
        };
    </script>
    <script>
        var address = init_sju(<?php echo $address ?>,{}); 
     //  console.log(address);    
    </script>
    <script src="/js/jquery.min.js"></script>
    <script src="/js/cyc-zuj.js"></script>
    <script src="/js/city.data-3.js"></script>
    <script src="/js/cude.min.js"></script>
    <script src="/js/address.js"></script>
    <script>
       var jssdk = init_sju(<?= $jssdk ?>,{});
    </script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
     <script src="/js/isfx.js"></script>
</body>
</html>