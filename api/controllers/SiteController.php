<?php

namespace api\controllers;

use yii\web\Controller;

/**
 * Created by PhpStorm.
 * User: iron
 * Date: 2018/5/25
 * Time: 16:42
 */
class SiteController extends Controller
{
    public function actions() {
        return [
            'error' => [
//                'class' => 'yii\web\ErrorAction',
                'class' => 'kcdev\yii2\web\KcErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }
}
