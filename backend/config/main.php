<?php
$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);

return [
    'id' => 'app-backend',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'backend\controllers',
    'bootstrap' => ['log'],
    'modules' => [
        'admin' => [
            'class' => 'mdm\admin\Module',
//            'layout' => 'left-menu',
        ],
        'gridview' => [
            'class' => '\kartik\grid\Module',

            'downloadAction' => '/gridview/export/download',//解决vendor里的内容导出问题
            'i18n' => [],
        ],
        'opencvtest' => [
            'class' => 'travis\opencvtest\Module',
        ]
    ],
    'aliases' => [
        '@kcdev/yii2/web' => "@vendor/kcdev/yii2/web",
        '@path' => '@backend/web/uploads/',
    ],
    'components' => [
        'request' => [
            'csrfParam' => '_csrf-backend',
        ],
        'user' => [
            'identityClass' => 'common\models\ars\AdminUser',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-backend', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the backend
            'name' => 'advanced-backend',
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'authManager' => [
            'class' => 'yii\rbac\DbManager',
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
            ],
        ],
        //    配置rbac
        'as access' => [
            'class' => 'mdm\admin\components\AccessControl',
            'allowActions' => [
                '*', //开放所有权限
//            'site/*'//设置默认权限
            ],
        ],
    ],
    'params' => $params,
];
