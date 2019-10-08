<?php
/**
 * Created by PhpStorm.
 * User: travis
 * Date: 19-10-8
 * Time: 上午10:35
 */

namespace travis\opencvtest\components;


use kcdev\yii2\base\KcComponent;

class OpencvManager extends KcComponent
{
    public function cascadeClassifier()
    {
        require_once __DIR__.'/../behaviors/cascadeClassifier.php';
    }
}