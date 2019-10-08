<?php

namespace wechat\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class GoodsAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/index.css',
        'css/ydd.css'

    ];
    public $js = [
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
