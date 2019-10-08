<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/**
 * Created by PhpStorm.
 * User: iron
 * Date: 2018/8/8
 * Time: 20:43
 */

$this->title = '微信公众号配置';
$this->params['breadcrumbs'][] = $this->title;
?>


<div class="config-index box box box-primary" style="padding: 20px">

    <?= DetailView::widget(['model' => $model,
        'attributes' => [
            ['attribute' => 'wx_appId',],
            ['attribute' => 'wx_secret',],
            ['attribute' => 'wx_token',
                'label' => '微信token'
            ],
            ['attribute' => 'txt_name',],
            ['attribute' => 'wx_mchId',],
            ['attribute' => 'wx_key',],

        ]
    ]); ?>

    <?= Html::a('修改公众号配置', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
</div>

