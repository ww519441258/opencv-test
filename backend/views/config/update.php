<?php

use yii\helpers\Html;
use kartik\form\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\ars\Config */

$this->title = '修改设置';
$this->params['breadcrumbs'][] = ['label' => '店铺设置', 'url' => ['index']];
$this->params['breadcrumbs'][] = '基础参数';
?>
<div class="config-update">

    <div class="config-form box box box-info" style="padding: 20px">

        <?php $form = ActiveForm::begin(); ?>

        <?= $form->field($model, 'shop_name')->textInput() ?>

        <?= $form->field($model, 'api_domain_name')->textInput(['value' => $model->api_domain_name ?: 'https://']) ?>

        <div class="form-group">
            <?= Html::submitButton('保存', ['class' => 'btn btn-success']) ?>
            <?= Html::button('返回', ['class' => 'btn btn-info','onclick'=>"window.history.go(-1)"]) ?>
        </div>

        <?php ActiveForm::end(); ?>

    </div>

</div>
