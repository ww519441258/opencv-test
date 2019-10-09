<?php

namespace kcdev\yii2\web;

class VuejsAsset extends \yii\web\AssetBundle {

    //public $jsOptions = ['position' => \yii\web\View::POS_HEAD];
    public $sourcePath = '@vendor/kcdev/yii2/assets';
    public $js = [
        'vue-v2.5.16.js'
    ];

}
