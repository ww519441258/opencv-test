<?php
/**
 * Created by PhpStorm.
 * User: travis
 * Date: 19-10-8
 * Time: 上午10:28
 */

namespace travis\opencvtest\controllers;

use yii\web\Controller;

class DefaultController extends Controller
{
    public $layout = '@backend/views/layouts/main';

    public function actionIndex()
    {
        return $this->render('index');
    }
}