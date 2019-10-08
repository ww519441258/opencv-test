<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;//用了创建表单
use common\models\ars\AdminUser;

/* @var $this yii\web\View */
/* @var $model common\models\AdminUser */
/* @var $form yii\widgets\ActiveForm */
?>
<div class="signupForm-form">

    <?php $form = ActiveForm::begin(); ?><!--创建表单实例并标注表单的开始-->

    <?= $form->field($model, 'username')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'authority')->dropDownList(\backend\models\SignupForm::roles())->label('分配角色') ?>

    <?= $form->field($model, 'password')->passwordInput() ?>

    <?= $form->field($model, 'password_repeat')->passwordInput() ?>

    <?= $form->field($model, 'introduction')->textArea(['maxlength' => true, 'rows' => 6]) ?><!--多行文本输入框-->


    <div class="form-group">
        <?= Html::submitButton('添加', ['class' => 'btn btn-success']) ?>
        <?= Html::button('返回', ['class' => 'btn btn-info','onclick'=>"window.history.go(-1)"]) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
