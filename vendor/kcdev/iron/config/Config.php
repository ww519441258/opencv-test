<?php
namespace kcdev\iron\config;
/**
 * Created by PhpStorm.
 * User: iron
 * Date: 2018/7/16
 * Time: 21:25
 */
class Config extends \yii\base\Component
{
    public function getConfig()
    {
//        $data = [];
        $config = \common\models\ars\Config::findOne(1);
//        $data['name'] = $config->shop_name;
//        $data['skuType'] = $config->sku_type == 1 ? '属性组合' : '手动输入';
//        $data['stockWarn'] = $config->stock_warn;
        return $config;
    }
}