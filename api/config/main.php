<?php

$params = array_merge(
    require __DIR__ . '/../../common/config/params.php', require __DIR__ . '/../../common/config/params-local.php', require __DIR__ . '/params.php', require __DIR__ . '/params-local.php'
);

return [
    'id' => 'app-api',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'api\controllers',
    'bootstrap' => ['log'],
    'modules' => [
        'treemanager' => [
            'class' => '\kartik\tree\Module',
            'treeStructure' => [
                'treeAttribute' => 'root',
                'leftAttribute' => 'lft',
                'rightAttribute' => 'rgt',
                'depthAttribute' => 'lvl',
            ],
        ],
    ],

    'components' => [
        'request' => [
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ],
            'csrfParam' => '_csrf-api',
        ],
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-api', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the api
            'name' => 'advanced-api',
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
                    'categories' => ['share', 'unify', 'others'],
                    'logFile' => '@app/runtime/logs/info.log',
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
        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'user',
                    'pluralize' => false,
                    'extraPatterns' => [
                        'GET login' => 'login',
                        'GET code' => 'code',
                        'GET test' => 'test',
                        'GET is-register' => 'is-register',
                        'GET points-log' => 'points-log',
                        'GET balances-log' => 'balances-log',
                        'OPTIONS verify' => 'verify',
                        'OPTIONS edit' => 'edit',
                        'OPTIONS dau' => 'dau',
                        'PUT verify' => 'verify',
                        'PUT dau' => 'dau',
                        'PUT edit' => 'edit',
                        'POST recharge' => 'recharge',
                        'POST errors-log' => 'errors-log',
                        'POST miniprogram-login' => 'miniprogram-login'
                    ]
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'info',
                    'extraPatterns' => [
                        'GET rank-info' => 'rank-info',
                        'GET picking-site' => 'picking-site',
                        'GET refund-reason' => 'refund-reason',
                        'GET category-list' => 'category-list',
                        'GET tags-list' => 'tags-list',
                        'GET jssdk' => 'jssdk',
                        'GET detail' => 'detail',
                        'GET search' => 'search',
                        'GET index' => 'index',
                        'GET price' => 'price',
                        'GET company' => 'company',
                        'GET sold' => 'sold',
                        'GET seckill' => 'seckill',
                        'GET seckill-activities' => 'seckill-activities',
                        'GET seckill-goods' => 'seckill-goods',
                        'GET category' => 'category',
                        'GET status' => 'status',
                        'GET tag' => 'tag',
                        'GET receive' => 'receive',
                        'POST receive' => 'receive',
                        'POST log'=>'log',
                        'GET get-qr-code' => 'get-qr-code',
                    ]
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'config',
                    'pluralize' => false,
                    'extraPatterns' => [
                        'OPTIONS upload-banner' => 'upload-banner',
                        'POST upload-banner' => 'upload-banner',
                        'GET page-layout' => 'page-layout',
                    ]
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'opencv',
                    'pluralize' => false,
                    'extraPatterns' => [
                        'GET cascade-classifier' => 'cascade-classifier',
                    ]
                ],
            ],
        ],
        'authManager' => [
            'class' => 'yii\rbac\PhpManager',
            'itemFile' => '@api/rbac/items.php',
            'assignmentFile' => '@api/rbac/assignments.php',
            'ruleFile' => '@app/rbac/rules.php'
        ],
    ],
    'params' => $params,
];
