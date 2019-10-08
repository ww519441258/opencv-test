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
    <!-- <link rel="stylesheet" href="//unpkg.com/vue-ydui/dist/ydui.rem.css"> -->
    <link rel="stylesheet" href="/css/ydd.css">
    <link rel="stylesheet" href="/css/cyc-zuj.css">
    <link rel="stylesheet" href="/css/index.003.css">
    <style>
        [v-cloak] {display: none;}
    </style>
    <script src="/js/vue.min.js"></script>
</head>
<body>
    
    <div class="app" v-cloak>
        <!-- 倒计时部分 -->
         <dl class="app-time">
             <dt>
                 <span>距离结束时间 : </span>
                 <p>{{newtime}}</p>
             </dt>
             <dd @touchstart="an0" @touchmove="an1" @touchend="flFu">分类</dd>
        </dl>
        <!-- 人气秒杀 -->
        <!-- <scroller 
            :on-refresh="refresh"
            class="app-sell"
            ref="my_scroller"
		> -->
        <h2 class="h2 h2-top">人气秒杀
           <span v-if="categoryText != ''">({{categoryText}})</span>
        </h2>
        <div class="app-hot">
            <dl v-for="(item,idx) in goodsHot">
                <dt>
                    <!-- <img :src="item.img"> -->
                    <img v-lazy="item.img">
                </dt>
                <dd>
                    <span>{{item.name}}</span>
                    <p>
                        <i>
                            {{item.promote_price}}
                            <!-- <del>¥{{item.shop_price}}</del> -->
                        </i>
                        <em class="hot-em" @touchstart="an0" @touchmove="an1" @touchend="tocartFu(item,idx,$event)"></em>
                    </p>
                </dd>
            </dl>
        </div>
        <!-- 畅销秒杀 -->
        <h2 class="h2">畅销秒杀
            <i>全场满299包邮!</i>
            <span v-if="categoryText != ''">({{categoryText}})</span>
        </h2>
        <div class="app-sell">
        
              <dl v-for="(item,idx) in goodsBest">
                  <dt>
                      <!-- <img :src="item.img"> -->
                      <img v-lazy="item.img">
                  </dt>
                  <dd>
                      <h3>{{item.name}}</h3>
                      <p>
                           <i>{{item.promote_price}}</i>
                           <del>¥{{item.shop_price}}</del>
                       </p>
                       <h4>
                          <span v-if="item.sold>item.stock" style="{width:0.5+'%')}"></span>
                           <span v-if="item.sold<item.stock" :style="{width:((100-((item.sold/item.stock)*100))+'%')}"></span>
                       </h4>
                       <em>已售<b>{{item.sold}}</b>件</em>
                       <strong class="hot-strong" @touchstart="an0" @touchmove="an1" @touchend="tocartFu(item,idx,$event)"></strong>
                  </dd>
              </dl>
        </div>
        <!-- </scroller> -->
        <!-- 底部导航 -->
        <div class="app-nav">
            <p @touchstart="an0" @touchmove="an1" @touchend="navFu('秒杀首页')" class="newNav">秒杀首页</p>
            <p class="gwc" @touchstart="an0" @touchmove="an1" @touchend="navFu('购物车')">购物车</p>
            <p @touchstart="an0" @touchmove="an1" @touchend="navFu('我的订单')">我的订单</p>
        </div>
        <!-- 分类  -->
        <div class="app-category" v-if="iscategory">
            <div class="category-mark" @touchstart="an0" @touchmove="an1" @touchend="markFu"></div>
            <div class="category-con">
                <p @touchstart="an0" @touchmove="an1" @touchend="markFu(item,idx)" v-for="(item,idx) in category">
                    <input type="radio" :value="item.id" v-model="categoryName">
                    <i>{{item.name}}</i>
                    {{item.name}}
                </p>
            </div>
        </div>
        <!-- 飞入效果 -->
        <div class="app-box"></div>
        <!-- 首页弹框 -->
        <div class="mark-box" v-if="ismarkBox" @touchstart="an0" @touchmove="an1" @touchend="markBoxFu">
            <p>
                <span>83折优惠线上提前享，满299元免运费！购物无忧！</span>
            </p>
        </div> 
    </div>
    <script type="text/javascript">
        function init_sju(a,b){
            //初始化数据
            //如果a没有值则把用户希望的b值赋值进去
            return a?a:b;
        };
    </script>
    <script>
         var goodsHot = init_sju(<?= $goodsHot ?>,[]); 
         var goodsBest = init_sju(<?= $goodsBest ?>,[]);
         var category = init_sju(<?= $category ?>,[]);
         var timeStamp = init_sju(<?= $time ?>,1);
         category.unshift({
             id:0,
             name:"全部",
         })
         //console.log(goodsHot);
         //console.log(goodsBest);
        //  console.log(category);
        // console.log(timeStamp);
    </script>
     <!-- <script src="/js/kute.js"></script>
     <script src="/js/kute-css.js"></script> -->
     <script src="/js/velocity.min.js"></script>
     <script src="/js/vue-lazyload.js"></script>
     <script src="/js/jquery.min.js"></script>
     <!-- <script src="/js/axios.min.js"></script> -->
     <script src="/js/cyc-zuj.js"></script>
     <!-- <script src="/js/vue-scroller.min.js"></script> -->
     <!-- <script src="//unpkg.com/vue-ydui/dist/ydui.rem.js"></script> -->
     <script src="/js/index.007.js"></script>
     <script>
       var jssdk = init_sju(<?= $jssdk ?>,{});
    </script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
     <script src="/js/fx.js"></script>
     
</body>
</html>
