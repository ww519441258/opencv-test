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
    <link rel="stylesheet" href="/css/my.css">
    <style>
        [v-cloak] {display: none;}
    </style>
    <script src="/js/vue.min.js"></script>
</head>
<body>
    <div class="app" v-cloak>
        <div class="app-top-nav">
            <strong></strong>
            <span>我的订单</span>
            <strong></strong>
        </div>
        <div class="app-tips-nav">
            如本次线上购物需要提供发票证明，请收到快递后15天内前往嘉荣线下门店服务台，凭订单完成页面办理开票服务
        </div>
        <div class="app-navs">
            <p :class="{pshow:(typeText=='all')}" @touchstart="an0" @touchmove="an1" @touchend="topnavFu('all')">全部</p>
            <p :class="{pshow:(typeText=='未付款')}" @touchstart="an0" @touchmove="an1" @touchend="topnavFu('未付款')">待付款</p>
            <p :class="{pshow:(typeText=='未发货')}" @touchstart="an0" @touchmove="an1" @touchend="topnavFu('未发货')">待发货</p>
            <p :class="{pshow:(typeText=='已发货')}" @touchstart="an0" @touchmove="an1" @touchend="topnavFu('已发货')">待收货</p>
            <p :class="{pshow:(typeText=='已完成')}" @touchstart="an0" @touchmove="an1" @touchend="topnavFu('已完成')">已完成</p>
        </div>
        <div class="app-con">
            <template v-if="orderInfo.length>0">
                <div class="app-cons" v-for="(item,idx) in orderInfo">
                    <label>
                        <span>订单编号：{{item.order_sn}}</span>
                        <i>{{item.status}}</i>
                        <!-- <i v-if="item.type == 1">未付款</i>
                        <i v-if="item.type == 2">未发货</i>
                        <i v-if="item.type == 3">已发货</i>
                        <i v-if="item.type == 4">已完成</i> -->
                    </label>
                    <dl class="con-dl" v-for="(items,idxs) in item.goods">
                        <dt>
                            <img :src="items.goods_img">
                        </dt>
                        <dd>
                            <h3>{{items.goods_name}}</h3>
                            <p>
                                <i>{{items.promote_price}}</i>
                                <del>¥{{items.shop_price}}</del>
                                <span>×{{items.goods_number}}</span>
                            </p>
                        </dd>
                    </dl>
                    <div class="app-total app-totals">
                        <span>运费</span>
                        <!-- <em v-if="item.shipping_fee != '0.00' || item.shipping_fee != '0'">首重3KG运费10元，之后每超过1KG加1元,首重3KG运费10元，之后每超过1KG加1元，首重3KG运费10元，之后每超过1KG加1元</em> -->
                        <p>
                            {{item.shipping_fee == '0.00' || item.shipping_fee == '0'?"包邮":item.shipping_fee}}
                        </p>
                    </div>
                    <div class="app-total">
                        <span>共{{item.amount}}件商品</span>
                        <p>
                            合计 : 
                            <i>{{item.pay_fee}}</i>
                        </p>
                    </div>
                    <div class="app-qx">
                        <span class="end" v-if="item.status == '未付款'" @touchstart="an0" @touchmove="an1" @touchend="btn0Fu(item,idx,'取消订单')">取消订单</span>
                        <span class="show" v-if="item.status == '未付款'" @touchstart="an0" @touchmove="an1" @touchend="btn0Fu(item,idx,'付款')">付款</span>
                        <span class="end" v-if="item.status == '未发货'" @touchstart="an0" @touchmove="an1" @touchend="btn0Fu(item,idx,'申请退款')">申请退款</span>
                        <span class="show" v-if="item.status == '未发货'" @touchstart="an0" @touchmove="an1" @touchend="btn0Fu(item,idx,'提醒发货')">提醒发货</span>
                        <span class="show" v-if="item.status == '已发货'" @touchstart="an0" @touchmove="an1" @touchend="btn0Fu(item,idx,'确认收货')">确认收货</span>
                        <span class="end" v-if="item.status == '已完成'" @touchstart="an0" @touchmove="an1" @touchend="btn0Fu(item,idx,'退货退款')">退货退款</span>
                    </div>
                </div>
           </template>
           <template v-if="orderInfo.length<1">
               <p class="isp">当前{{typeText}}订单没有任何数据</p>
           </template>
            <!-- <div class="app-cons">
                <label>
                    <span>订单编号：4511531345453</span>
                    <i>未付款</i>
                </label>
                <dl class="con-dl">
                    <dt>
                        <img src="/img/cart4.png">
                    </dt>
                    <dd>
                        <h3>女式 无侧缝接结 睡衣睡衣睡衣 无侧缝接结女式 无侧缝接结 睡衣睡衣睡衣 无侧缝接结</h3>
                        <p>
                            <i>120.00</i>
                            <del>¥150</del>
                            <span>×1</span>
                        </p>
                    </dd>
                </dl>
                <div class="app-total">
                    <span>共1件商品</span>
                    <p>
                        合计 : 
                        <i>120.00</i>
                    </p>
                </div>
                <div class="app-qx">
                    <span class="end">申请退款</span>
                    <span class="show">提醒发货</span>
                </div>
            </div> -->
            <!-- 底部导航 -->
             <div class="app-nav">
                <p @touchstart="an0" @touchmove="an1" @touchend="navFu('秒杀首页')">秒杀首页</p>
                <p @touchstart="an0" @touchmove="an1" @touchend="navFu('购物车')">购物车</p>
                <p @touchstart="an0" @touchmove="an1" @touchend="navFu('我的订单')" class="newNav">我的订单</p>
            </div>
        </div>
    </div>


    <script>
       var sju = [
           {type:'未付款'},//未付款
           {type:'未发货'},//未发货
           {type:'已发货'},//已发货
           {type:'已完成'},//已完成
       ];
    </script>
     <script type="text/javascript">
        function init_sju(a,b){
            //初始化数据
            //如果a没有值则把用户希望的b值赋值进去
            return a?a:b;
        };
    </script>
    <script>
        var orderInfo = init_sju(<?php echo $orderInfo ?>,[]);
        // console.log(orderInfo);
    </script>
    <script src="/js/jquery.min.js"></script>
    <script src="/js/cyc-zuj.js"></script>
    <script src="/js/my.js"></script>
    <script>
       var jssdk = init_sju(<?= $jssdk ?>,{});
    </script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
     <script src="/js/isfx.js"></script>
</body>
</html>