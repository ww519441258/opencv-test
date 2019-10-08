<?php
/**
 * Created by PhpStorm.
 * User: travis
 * Date: 19-10-8
 * Time: 上午10:10
 */

namespace api\controllers;

use Yii;

class OpencvController extends CommonController
{
    public $modelClass = '';

    public function actionCascadeClassifier()
    {
        Yii::$app->opencvtest->cascadeClassifier();
    }
}