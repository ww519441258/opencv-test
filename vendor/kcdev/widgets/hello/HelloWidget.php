<?php

namespace kcdev\widgets\hello;

use yii\base\Widget;
use yii\helpers\Html;

class HelloWidget extends Widget {

    public $message;

    public function init() {
        parent::init();
        if ($this->message === null) {
            $this->message = 'Hello World';
        }
    }

    public function run() {
        return $this->render('index.php', [
                    'message' => $this->message
        ]);
    }

}
