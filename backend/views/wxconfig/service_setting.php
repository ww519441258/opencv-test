<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/**
 * Created by PhpStorm.
 * User: iron
 * Date: 19-3-13
 * Time: 下午4:50
 */
$this->title = '配置服务器';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="modal fade" id="modal_infos" role="basic" aria-hidden="true">
    <div class="modal-dialog" style="width:55%">
        <div class="modal-content">
            <div class="modal-body">
                <span> &nbsp;&nbsp;Loading... </span>
            </div>
        </div>
    </div>
</div>
<div class="config-update">
    <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span
                    aria-hidden="true">&times;</span></button>
        <?php
        if ($model->service_setting) {
            echo '<p style="font-size: 1.2em">设置成功!</p>';
            echo Html::a('重置配置', 'reset', ['style' => 'color:#a20c20;font-size:1.1em',
                'data' => [
                    'confirm' => '重置配置后将更新Token和EncodingAESKey的值，必须重新在公众号后台配置服务器并重新开启!!!',
                    'method' => 'post'
                ]]);
        } else {
            echo '<p style="font-size: 1.2em">将以下信息对应到微信公众号后台基础设置中的配置服务器相对应的位置!</p>';
            echo Html::a('详细说明', ['infos'], [
                'style' => 'color:black',
                'data-toggle' => 'modal',
                'data-target' => '#modal_infos']);
        }
        ?>
    </div>

    <div class=" box box box-info" style="padding: 20px">

        <?php $form = ActiveForm::begin(); ?>
        <?= $form->field($model, 'wx_url')->textInput(['disabled' => 'disabled'])->label('Url：') ?>
        <?= $form->field($model, 'wx_token')->textInput(['disabled' => 'disabled'])->label('Token：') ?>
        <?= $form->field($model, 'aes_key')->textInput(['disabled' => 'disabled'])->label('EncodingAESKey：') ?>

        <div class="form-group">
            <?php
            if (!$model->service_setting) {
                echo Html::a('检测是否配置成功', ['setting', 'id' => $model->id], ['class' => 'btn btn-info']);
            }
            ?>
        </div>

        <?php ActiveForm::end(); ?>

    </div>
</div>