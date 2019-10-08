<?php

namespace wechat\controllers;

use Yii;
use yii\web\Controller;

/**
 * Common controller
 */
class CommonController extends Controller {

//    public $layout = false;
    public $enableCsrfValidation = false ;

    public function beforeAction($action) {
        if (parent::beforeAction($action)) {
            
            return true;
        } else {
            return false;
        }
    }

}
