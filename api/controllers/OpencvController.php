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


    public function actionDetectFaceByDnnSsd()
    {
        Yii::$app->opencvtest->detectFaceByDnnSsd();
    }

    /**
     * 图片矢量放大2倍
     */
    public function actionUpscaleImagex2ByDnnWaifu2x()
    {
        Yii::$app->opencvtest->upscaleImagex2ByDnnWaifu2x();
    }

}