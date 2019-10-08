<?php

namespace wechat\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [

        '/static/css/app.b081f16ce155fca2bada82d1e659e0ea.css',



    ];
    public $js = [


        '/static/js/manifest.022dfd6954bb944dc111.js',
        '/static/js/vendor.16599f2212cb603f7587.js',
        '/static/js/app.1255c487c4257bd05daa.js'

    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}

?>
