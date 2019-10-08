<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use common\models\ars\AdminUser;
/* @var $this yii\web\View */
/* @var $model common\models\AdminUser */

$this->title = '更新管理员信息: ' . $model->username;
$this->params['breadcrumbs'][] = ['label' => '管理员管理', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->username, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = '更新';
?>
<div class="adminuser-update">

    <h1></h1>

    <div class="signupForm-form">

        <?php $form = ActiveForm::begin(); ?>

        <?= $form->field($model, 'username')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'introduction')->textarea(['maxlength' => true,'rows'=>6])?>
        <div class="form-group">
            <?= Html::submitButton('更改', ['class' => 'btn btn-success']) ?>
            <?= Html::a('返回',['index'], ['class' => 'btn btn-info']) ?>
        </div>

        <?php ActiveForm::end(); ?>

    </div>

</div>
