<?php

use yii\helpers\Html;
use kartik\form\ActiveForm;
use kartik\file\FileInput;
use yii\helpers\Url;
use dosamigos\fileupload\FileUploadUI;

/* @var $this yii\web\View */
/* @var $model common\models\ars\Config */

$this->title = '配置微信公众号参数';
$this->params['breadcrumbs'][] = ['label' => '系统管理', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="config-update">

    <div class=" box box box-info" style="padding: 20px">

        <?php $form = ActiveForm::begin(); ?>
        <div class="row">
            <div class="col-lg-6">
                <?= $form->field($model, 'wx_appId')->textInput(['']) ?>
            </div>
            <div class="col-lg-6">
                <?= $form->field($model, 'wx_secret')->textInput() ?>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <?= $form->field($model, 'wx_mchId')->textInput() ?>
            </div>
            <div class="col-lg-6">
                <?= $form->field($model, 'wx_key')->textInput() ?>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <?= $form->field($model, 'file')->widget(FileInput::className(), [
                    'options' => [
                        'multiple' => true,
                        'accept' => '.pem',],
                    'pluginOptions' => [
                        'initialPreview' =>
                            $model->wx_certPath || $model->wx_keyPath ? [$model->wx_certPath ? '/img/cert.jpg' : '', $model->wx_keyPath ? '/img/cert.jpg' : ''] : [],
                        'initialPreviewConfig' =>
                            [
                                $model->wx_certPath ? ['url' => Url::to(['wxconfig/file-delete']), 'key' => 'cert', 'caption' => substr($model->wx_certPath, strpos($model->wx_certPath, '_') + 1)] : [],
                                $model->wx_keyPath ? ['url' => Url::to(['wxconfig/file-delete']), 'key' => 'key', 'caption' => substr($model->wx_keyPath, strpos($model->wx_certPath, '_') + 1)] : [],
                            ],
                        'initialPreviewAsData' => true,
                        'maxFileCount' => 2,
                        'maxFileSize' => 2048,
                        'uploadUrl' => Url::to(['/wxconfig/upload']),
                        'overwriteInitial' => false,
                    ],
                ])->label('支付证书上传') ?>
            </div>
            <div class="col-lg-6">
                <?= $form->field($model, 'txtFile')->widget(FileInput::className(), [
                    'options' => [
                        'accept' => '.txt',],
                    'pluginOptions' => [
                        'initialPreview' => $model->txt_name ? ['/img/txt.png'] : [],
                        'initialPreviewConfig' => [['url' => Url::to(['wxconfig/file-delete']), 'key' => 'txt', 'caption' => $model->txt_name]],
                        'initialPreviewAsData' => true,
                        'maxFileCount' => 1,
                        'maxFileSize' => 2048,
                        'uploadUrl' => Url::to(['/wxconfig/txt-upload']),
                        'overwriteInitial' => false,
                    ],
                ])->label('网页授权txt上传') ?>
            </div>
        </div>

        <div class="form-group">
            <?= Html::submitButton('保存', ['class' => 'btn btn-success']) ?>
            <?= Html::button('返回', ['class' => 'btn btn-info','onclick'=>"window.history.go(-1)"]) ?>
        </div>

        <?php ActiveForm::end(); ?>

    </div>
</div>