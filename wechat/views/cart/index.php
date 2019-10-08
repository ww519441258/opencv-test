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
    <link rel="stylesheet" href="/css/ydd.css">
    <link rel="stylesheet" href="/css/cyc-zuj.css">
    <link rel="stylesheet" href="/css/cart.css">
    <style>
        [v-cloak] {display: none;}
    </style>
    <script src="/js/vue.min.js"></script>
</head>
<body>
    <div class="app" v-cloak>
        <div class="app-top-nav nav-fixed">
            <i @touchstart="an0" @touchmove="an1" @touchend="fhFu"></i>
            <span>购物车</span>
            <em @touchstart="an0" @touchmove="an1" @touchend="deleteFu"></em>
        </div>
        <div class="app-top-nav nav-top">
            <b></b><p class="nav-p">预售时间为4月14日至4月20日，4月20日统一发货</br>客服热线：4008305333</p><b></b>
        </div>
        <!-- 如果有数据 -->
        <template v-if="sju.length>0">
            <div class="app-cart">
                <dl class="cart-dl" v-for="(item,idx) in sju">
                    <!-- <label @touchstart="an0" @touchmove="an1" @touchend="checkedFu(item,idx)"> -->
                    <label>
                        <input type="checkbox" :value="item.id" @change="checkedFu(item,idx)" v-model="checkedNames">
                        <i></i>
                    </label>
                    <dt>
                        <img :src="item.goods_img">
                    </dt>
                    <dd>
                        <h3>{{item.name}}</h3>
                        <p>
                            <i>{{item.promote_price}}</i>
                            <del>¥{{item.shop_price}}</del>
                        </p>
                        <span>
                            <i @touchstart="an0" @touchmove="an1" @touchend="jianFu(item,idx)">-</i>
                            <!-- <input type="text" disabled="disabled" v-model="item.goods_number"> -->
                            <i class="inumber">{{item.goods_number}}</i>
                            <em @touchstart="an0" @touchmove="an1" @touchend="jiaFu(item,idx)">+</em>
                        </span>
                    </dd>
                </dl>
                <!-- <dl class="cart-dl">
                    <label>
                        <input type="checkbox">
                        <i></i>
                    </label>
                    <dt>
                        <img src="/img/cart4.png">
                    </dt>
                    <dd>
                        <h3>女式 无侧缝接结 睡衣睡衣睡衣 无侧缝接结女式 无侧缝接结 睡衣睡衣睡衣 无侧缝接结</h3>
                        <p>
                            <i>120.00</i>
                            <del>¥150</del>
                        </p>
                        <span>
                            <i>-</i>
                            <input type="text" disabled="disabled" value="1">
                            <em>+</em>
                        </span>
                    </dd>
                </dl> -->
            </div>
            <!-- 提交订单 -->
            <div class="app-tj">
                <label @touchstart="an0" @touchmove="an1" @touchend="allFu">
                <!-- <label> -->
                    <input type="checkbox" value="all" v-model="isall">
                    <i></i>
                    <span>全选</span>
                </label>
                <p>
                    合计 : 
                    <i>{{total}}</i>
                </p>
                <em :class="{emshow:(checkedNames.length>0)}" v-if="!isqr" @touchstart="an0" @touchmove="an1" @touchend="tijFu">提交订单</em>
                <em :class="{emshow:(checkedNames.length>0)}" v-if="isqr">提交订单</em>
            </div>
       </template>
       <!-- 如果没有数据 -->
        <template v-if="sju.length<1">
             <div class="app-tips">
                 <p>
                    <img src="/img/index_sell1.png">
                    <span>空空如也~</span>
                 </p>
             </div>
        </template>
        <!-- 信息填写 -->
        <div class="app-infos" v-if="isinfo">
            <dl class="app-info">
                 <dt>
                     <h3>会员信息</h3>
                     <input type="text" placeholder="请输入姓名" v-model="name">
                     <input type="text" placeholder="请输入手机号码" v-model="phone">
                     <label>
                         <input type="number" placeholder="请输入验证码" v-model="yzm">
                         <i v-if="!isyzm" @touchstart="an0" @touchmove="an1" @touchend="yzmFu">获取验证码</i>
                         <i v-if="isyzm" class="iend">倒计时{{yzmText}}秒</i>
                     </label>
                 </dt>
                 <dd>
                    <p @touchstart="an0" @touchmove="an1" @touchend="qxinfoFu">取消</p>
                    <p class="pshow" @touchstart="an0" @touchmove="an1" @touchend="qrinfoFu">确定</p>
                 </dd>
            </dl>
        </div>
        <!-- 底部导航 -->
        <div class="app-nav">
            <p @touchstart="an0" @touchmove="an1" @touchend="navFu('秒杀首页')">秒杀首页</p>
            <p @touchstart="an0" @touchmove="an1" @touchend="navFu('购物车')" class="newNav">购物车</p>
            <p @touchstart="an0" @touchmove="an1" @touchend="navFu('我的订单')">我的订单</p>
        </div>
    </div>
    <!-- <script>
        var sju = [
            {money:120,num:1,name:0},
            {money:130,num:1,name:1},
        ];
    </script> -->
    <script type="text/javascript">
        function init_sju(a,b){
            //初始化数据
            //如果a没有值则把用户希望的b值赋值进去
            return a?a:b;
        };
    </script>
    <script>
         var list = init_sju(<?php echo $list ?>,[]); 
         var status = list.status;
         var sju = [];
         for(var item in list){
            if(list[item].id){
                list[item].idx =1;
            } 
            sju.push(list[item]);
         }
         sju.pop();
        //  console.log(sju,status);
    </script>
    <script src="/js/jquery.min.js"></script>
    <script src="/js/cyc-zuj.js"></script>
    <script src="/js/cart.002.js"></script>
    <script>
       var jssdk = init_sju(<?= $jssdk ?>,{});
    </script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
     <script src="/js/isfx.js"></script>
</body>
</html>
