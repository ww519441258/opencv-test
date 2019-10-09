<?php

namespace kcdev\yii2\web;

use common\models\ars\ImageConfig;
use Imagine\Gd\Image;
use PHPUnit\Runner\Exception;
use yii\web\NotFoundHttpException;
use Yii;
use yii\web\ErrorAction;

class KcErrorAction extends ErrorAction
{
    private $img = array(
        'jpg', 'jpeg', 'png'
    );
    private $video = array(
        'avi', 'wmv', 'mpeg',
        'mp4', 'mov', 'mkv',
        'flv', 'f4v', 'm4v',
        'rmvb', 'rm', '3gp',
        'dat', 'ts', 'mts', 'vob'
    );

    public function run() {
        //如果是图片请求 跳转到 image模块生成图片

        if ($this->getExceptionCode() == '404') {
            //willeny begin
            if ($this->controller->modules[0]->id == 'app-wechat' && $this->controller->id == 'site') {
                return Yii::$app->controller->runAction('index');
            }
            //willeny end
            $request  = Yii::$app->request;
            $path     = $request->url;
            $pathData = pathinfo($path);
            $suffix   = $pathData['extension'];
            $dirName  = $pathData['dirname'];
            $fileName = urldecode($pathData['basename']);
            $oldFile  = Yii::getAlias('@backend').'/web'.$dirName.'/'.$fileName;
            $newFile  = Yii::getAlias('@app').'/web'.$dirName.'/'.$fileName;
            if (in_array(strtolower($suffix),$this->img)) {
                $image = Yii::$app->image->createThumbnail($oldFile,$newFile);
                if ($image['state']) {
                    Yii::$app->response->statusCode = 200;
                    Yii::$app->response->send();
                    return $image['msg']->show($suffix);
                } else {
                    return $this->renderHtmlResponse();
                }
            } elseif (in_array(strtolower($suffix),$this->video)) {
                Yii::$app->image->copyFile($oldFile, $newFile, 'video/mp4');
            }
        }
        return parent::run();

    }
}
