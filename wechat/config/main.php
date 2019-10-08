<?php

$params = array_merge(
    require __DIR__ . '/../../common/config/params.php', require __DIR__ . '/../../common/config/params-local.php', require __DIR__ . '/params.php', require __DIR__ . '/params-local.php'
);

return [
    'id' => 'app-wechat',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'language' => 'zh-CN',
    'timeZone' => 'Asia/Chongqing',
    'charset' => 'utf-8',
    'controllerNamespace' => 'wechat\controllers',
    'modules' => [
        'treemanager' => [
            'class' => '\kartik\tree\Module',]
    ],
    'components' => [
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'request' => [
            'csrfParam' => '_csrf-wechat',
        ],
        'user' => [
            'identityClass' => 'common\models\ars\WechatUser',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-wechat', 'httpOnly' => true],
            'idParam' => '__wechat',
            'loginUrl' => ['site/login'],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the frontend
            'name' => 'advanced-wechat',
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['info', 'error'],
                    'categories' => ['notify', 'sign'],
                    'logFile' => '@app/runtime/logs/notify.log',
                    'logVars' => [],
                    'exportInterval' => 1,
                    'prefix' => function ($message) {
                    }
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'distribution' => ['class' => 'livan\distribution\component\DistributionManager'],
        'cart' => ['class' => 'kcdev\iron\cart\MysqlManager'],
        'order' => ['class' => 'kcdev\iron\order\OrderManager'],
        'goods' => ['class' => 'kcdev\iron\goods\GoodsManager'],
        'category' => ['class' => 'kcdev\iron\category\CategoryManager'],
        'address' => ['class' => 'kcdev\iron\address\AddressManager'],
        'jssdk' => ['class' => 'kcdev\iron\kd\ShareSdk'],
        'openid' => ['class' => 'kcdev\iron\payment\GetKcopenid'],
        'integral' => ['class' => 'kcdev\iron\integral\IntegralManager'],
        'integralChange' => ['class' => 'lmz\exchange\src\compoent\IntegralManager'],
        'wxpayment' => ['class' => 'kcdev\iron\payment\Wxpayment',
            'appId' => 'wx2656e26f870bccd0',
            'tradeType' => 'JSAPI',
            'mchId' => '1395812402',
            'key' => '51CF5EE3B2E35B9843E17E6099325A65',
//            'certPath' => '',
//            'keyPath' => '',
            'notifyUrl' => 'http://kcshop.kuaichuangkeji.com/goods/notify',

        ],
        'sendSms' => [
            'class' => 'kcdev\iron\sms\JrSms',
            'url' => 'http://120.77.49.16/sms/HttpSendSM',
            'account' => 'gdjrcs',
            'pswd' => 'iv2RDoNq',
        ],
        'guantong' => [
            'class' => 'kcdev\blobt\guantong\Guantong',
            'account' => '15235811051',
            'signKey' => '09faa75da9c376da6f0b36f88fdb98af',
            'notifyUrl' => 'http://xsg.jr.kuaichuangkeji.com/order/notify',
            'returnUrl' => 'http://xsg.jr.kuaichuangkeji.com/order/result',
            'appId' => 'wxe750f01f40d3babd'
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => true,
            'rules' => [
            ],
        ],
    ],
    'params' => $params,
];
