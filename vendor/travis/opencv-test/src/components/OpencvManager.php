<?php
/**
 * Created by PhpStorm.
 * User: travis
 * Date: 19-10-8
 * Time: 上午10:35
 */

namespace travis\opencvtest\components;

use Yii;
use travis\opencvtest\examples\UpscaleImagex2ByDnnWaifu2x;
use kcdev\yii2\base\KcComponent;
use travis\opencvtest\examples\VideoCascadeClassifier;
use travis\opencvtest\examples\detectFaceByDnnSdd;

class OpencvManager extends KcComponent
{
    /**
     * 摄像头活体人脸识别
     */
    public function cascadeClassifier()
    {
        require_once __DIR__.'/../examples/CascadeClassifier.php';
        $cascadeClassifier = new VideoCascadeClassifier();
        $cascadeClassifier->run();
    }

    /**
     * 人脸识别-dnn模型
     */
    public function detectFaceByDnnSsd()
    {
        require_once __DIR__.'/../examples/DetectFaceByDnnSsd.php';
        $model = new DetectFaceByDnnSdd();
        $model->source = Yii::getAlias('@vendor').'/travis/opencv-test/src/images/ming.jpg';
        $model->run();
    }

    /**
     * 图片矢量放大2倍
     */
    public function upscaleImagex2ByDnnWaifu2x()
    {
        require_once __DIR__.'/../examples/UpscaleImagex2ByDnnWaifu2x.php';
        $model = new UpscaleImagex2ByDnnWaifu2x();
        $model->source = Yii::getAlias('@vendor').'/travis/opencv-test/src/images/ming.jpg';
        $model->run();
    }

}