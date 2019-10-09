<?php

namespace kcdev\widgets\hello;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class HelloAsset extends AssetBundle {

    public $sourcePath = '@vendor/kcdev/widgets/hello';

    public $css = [
        'css/hello.css',
    ];
    public $js = [
        ['js/hello.js',['position' => \yii\web\View::POS_END]]
    ];
    public $depends = [
        'kcdev\yii2\web\VuejsAsset'
    ];

    //public $jsOptions = ['position' => \yii\web\View::POS_HEAD];
    
    public $publishOptions = ['forceCopy' => true];
}
