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
        <!-- <link rel="stylesheet" href="/css/cube.min.css"> -->
        <link rel="stylesheet" href="/css/ydd.css">
        <link rel="stylesheet" href="/css/cyc-zuj.css">
        <link rel="stylesheet" href="/css/order.001.css">
        <style>
            [v-cloak] {display: none;}
        </style>
        <script src="/js/vue.min.js"></script>
</head>
<body>
    <div class="app" v-cloak>
        <div class="app-top-nav">
            <i  @touchstart="an0" @touchmove="an1" @touchend="fhFu"></i>
            <span>确认订单</span>
            <span></span>
        </div>
        <div class="app-top-nav">
             <span></span>
             <p class="nav-p">预售时间为4月14日至4月20日，4月20日统一发货</p>
            <span></span>
        </div>
        <!-- 收货地址 -->
        <div v-if="orderInfo.address == ''" class="app-add" @touchstart="an0" @touchmove="an1" @touchend="addressFu">
             <span>添加收货地址</span>
             <img src="/img/order1.png">
        </div>
        <div v-if="orderInfo.address != ''" class="app-address app-add" @touchstart="an0" @touchmove="an1" @touchend="addressFu">
             <span>{{orderInfo.address.consignee}}</span>
             <span>{{orderInfo.address.tel}}</span>
             <p>{{orderInfo.address.province+orderInfo.address.city+orderInfo.address.district+orderInfo.address.address}}</p>
        </div>
        <!-- 快递 -->
        <!-- <div class="app-express app-add" @touchstart="an0" @touchmove="an1" @touchend="expressFu">
            <span>选择快递 : {{expressText}}</span>
            <img src="/img/order1.png">
        </div> -->
        <!-- 内容区 -->
        <div class="app-con">
            <!-- 如果有拆单 -->
            <template v-if="goods[0][0]" v-for="(items,idxs) in goods">
            <dl v-if="goods[0][0]" class="cart-dl" v-for="(item,idx) in items">
                <dt>
                    <img :src="item.goods_img">
                </dt>
                <dd>
                    <h3>{{item.goods_name}}</h3>
                    <p>
                        <i>{{item.promote_price}}</i>
                        <del>¥{{item.shop_price}}</del>
                        <span>×{{item.goods_number}}</span>
                    </p>
                    <p>
                        <em>{{item.shipping_fee == "0"?"由厂家发货":""}}</em>
                        <span>{{item.shipping_fee == "0"?"包邮":item.shipping_fee+"kg"}}</span>
                    </p>
                </dd>
                <!-- <div class="dl-yf">
                    <span>运费</span>
                    <p>免费</p>
                </div> -->
            </dl>
            </template>
            <!-- 如果没有拆单 -->
            <dl v-if="!goods[0][0]" class="cart-dl" v-for="(item,idx) in goods">
                <dt>
                    <img :src="item.goods_img">
                </dt>
                <dd>
                    <h3>{{item.goods_name}}</h3>
                    <p>
                        <i>{{item.promote_price}}</i>
                        <del>¥{{item.shop_price}}</del>
                        <span>×{{item.goods_number}}</span>
                    </p>
                    <p>
                        <em>{{item.shipping_fee == "0"?"由厂家发货":""}}</em>
                        <span>{{item.shipping_fee == "0"?"包邮":item.shipping_fee+"kg"}}</span>
                    </p>
                </dd>
                <!-- <div class="dl-yf">
                    <span>运费</span>
                    <p>免费</p>
                </div> -->
            </dl>
        </div>
        <!-- 运费 -->
        <div class="app-total app-add app-gz">
            <span>总运费</span>
            <em @touchstart="an0" @touchmove="an1" @touchend="gzFu"><<运费规则>></em>
            <p v-if="orderInfo.shipping_fee != '0.00'">
                合计 : 
                <i>{{orderInfo.shipping_fee}}</i>
            </p>
            <p v-if="orderInfo.shipping_fee == '0.00'">
                <span v-if="orderInfo.address && orderInfo.address.city">包邮</span>
                <!-- 合计 : 
                <i>{{orderInfo.shipping_fee}}</i> -->
            </p>
        </div>
        <!-- 合计 -->
        <div class="app-total app-add">
            <span>共{{orderInfo.amount}}件商品</span>
            <p>
                合计 : 
                <i>{{orderInfo.fee}}</i>
            </p>
        </div>
        <!-- 提交订单 -->
        <div class="app-tj">
            <label></label>
            <p>
                合计 : 
                <i>{{orderInfo.pay_fee}}</i>
            </p>
            <em class="emshow" v-if="!isqr" @touchstart="an0" @touchmove="an1" @touchend="tijFu">确认支付</em>
            <em class="emshow" v-if="isqr">确认支付</em>
        </div>
        <div class="isgzs" v-if="isgz" @touchstart="an0" @touchmove="an1" @touchend="isgzFu">
              <div class="isgz">
                   <h3>运费规则</h3>
                  <p>广东省内运费算法：商品重量3千克以内10元，超过3千克每千克加收1元(不足1千克按1千克计算)</p>
                  <p>广东省外运费算法：商品重量3千克以内12元，超过3千克每千克加收3元(不足1千克按1千克计算)</p>
                  <h4 style="text-align: center;">全场满299包邮!</h4>
                  <h4 style="text-align: center;">（之前满足包邮条件的顾客，会有客服联系您并退回运费）</h4>
              </div>
        </div>
         <!-- 底部导航 -->
        <div class="app-nav">
            <p @touchstart="an0" @touchmove="an1" @touchend="navFu('秒杀首页')">秒杀首页</p>
            <p @touchstart="an0" @touchmove="an1" @touchend="navFu('购物车')" class="newNav">购物车</p>
            <p @touchstart="an0" @touchmove="an1" @touchend="navFu('我的订单')">我的订单</p>
        </div>
    </div>
    <script src="/js/cude.min.js"></script>
    <script src="/js/cyc-zuj.js"></script>
    <script type="text/javascript">
        function init_sju(a,b){
            //初始化数据
            //如果a没有值则把用户希望的b值赋值进去
            return a?a:b;
        };
    </script>
    <script>
         var orderInfo = init_sju(<?php echo $orderInfo ?>,[]); 
         var goods = init_sju(<?php echo $goods ?>,[]);
         var payConfig = init_sju(<?php echo $payConfig ?>,[]);
        // var payConfig = init_sju({},{});
        //  var goods = [];
        //  for(var item in goodss){
        //     goods.push(goodss[item]);
        //  }    
       //  console.log(orderInfo);
         //console.log(goods);
    </script>
    <!-- <script>
       var sju = [
            {money:120,num:1,name:0},
            {money:130,num:1,name:1},
        ];
    </script> -->
    <script src="/js/jquery.min.js"></script>
    <script src="/js/order.004.js"></script>
    <script>
       var jssdk = init_sju(<?= $jssdk ?>,{});
    </script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
     <script src="/js/isfx.js"></script>
</body>
</html>