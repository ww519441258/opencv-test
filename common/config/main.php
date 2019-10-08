<?php
return [
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'components' => [
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'config' => ['class' => 'kcdev\iron\config\Config'],
        'wechat' => ['class' => 'kcdev\iron\wechat\WeChat'],
        'image' => ['class' => 'kcdev\cgb\image\ImageManage'],
        'opencvtest' => ['class' => 'travis\opencvtest\components\OpencvManager'],
    ],
];
