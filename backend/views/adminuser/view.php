<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\AdminUser */

$this->title = $model->username;
$this->params['breadcrumbs'][] = ['label' => 'Adminusers', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="adminuser-view">



    <p>
        <?= Html::button('返回', ['class' => 'btn btn-info','onclick'=>"window.history.go(-1)"]) ?>
        <?= Html::a('修改', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('删除', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'username',

            ['attribute'=>'created_at',
             'value'=>date('Y-m-d',$model->created_at),
            ],
            ['attribute'=>'updated_at',
                'value'=>date('Y-m-d',$model->updated_at),
            ],
//            'introduction',
        ],
    ]) ?>

</div>
