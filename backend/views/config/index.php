<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use common\models\ars\Config;

/* @var $this yii\web\View */
/* @var $searchModel common\models\searchs\ConfigSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = '基本设置';
$this->params['breadcrumbs'][] = $this->title;

$cache = Yii::$app->cache->get('goods_template_type');
$data = [];
if($cache){
    foreach ($cache as $k=>$value) {
        $data[$value['name']] = $value['title'];
    }
}
?>
<style>
    .table {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .module-type {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .module-others {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .config-index {
        width: auto !important;
    }
</style>

<div class="table">
    <div class="config-index box box box-primary" style="padding: 20px">

        <?= DetailView::widget(['model' => $model,
            'attributes' => [
                'shop_name',
                'api_domain_name',
            ]
        ]);
        ?>
        <?= Html::a('修改基本参数配置', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
    </div>

</div>
