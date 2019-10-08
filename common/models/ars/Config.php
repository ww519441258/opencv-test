<?php

namespace common\models\ars;

use Yii;

/**
 * This is the model class for table "kcs_config".
 *
 * @property int $id
 * @property string $service_name
 * @property int $stock_warn
 * @property int $sku_type
 * @property int $layout_enabled
 */
class Config extends \yii\db\ActiveRecord
{
    const SKU_TYPE_ATTRIBUTE = 1;//属性组合
    const SKU_TYPE_MANUAL = 2;//手动输入

    const MODULE_TYPE_LINE = 1;//横排
    const MODULE_TYPE_MULTI = 2;//多列
    const MODULE_TYPE_ROW = 3;//竖排

    public $file;
    public $txtFile;

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'kcs_config';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['api_domain_name', 'shop_name', 'txt_name', 'wx_domain_name', 'wx_token',
                'wx_url', 'company_logo', 'company_content', 'wx_certPath', 'wx_keyPath'], 'string', 'max' => 255],
            [['wx_appId', 'wx_secret', 'mini_program_appId', 'mini_program_secret', 'wx_mchId', 'wx_key'], 'string', 'max' => 50],
            ['menu_setting', 'safe'],
            [['service_setting'], 'integer'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'shop_name' => '系统名称',
            'auto_confirm_receive' => '自动确认收货时间（天）',
            'auto_cancel_time' => '未付款订单过期时间（小时）',
            'wx_appId' => '微信appId',
            'wx_secret' => '微信secret',
            'wx_mchId' => '微信商户号',
            'wx_key' => '微信支付密钥',
            'wx_certPath' => 'Wx Cert Path',
            'wx_keyPath' => 'Wx Key Path',
            'api_domain_name' => '接口域名',
            'txt_name' => '网页授权文件',
        ];
    }

    /**
     * 保存证书
     * @param $dir
     * @return mixed
     */
    public function upload($tag)
    {
        $path = Yii::getAlias('@backend') . '/cert/';
        if (!file_exists($path)) {
            mkdir($path, 0755);
        }
//        var_dump($this->file->name);exit();
        $imageName = md5(time() . rand(000, 999));
        if ($tag == 'wx') {
            if (strpos($this->file->name, 'cert')) {
                $this->wx_certPath = '/cert/' . $imageName . '_' . $this->file->name;
            }
            if (strpos($this->file->name, 'key')) {
                $this->wx_keyPath = '/cert/' . $imageName . '_' . $this->file->name;
            }
        } else {
            if (strpos($this->file->name, 'cert')) {
                $this->mini_program_certPath = '/cert/' . $imageName . '_' . $this->file->name;
            }
            if (strpos($this->file->name, 'key')) {
                $this->mini_program_keyPath = '/cert/' . $imageName . '_' . $this->file->name;
            }
        }

        if ($this->file->saveAs($path . $imageName . '_' . $this->file->name)) {
            return $this->save() ? true : false;
        }
    }

    public static function dropDown($column, $value = null)
    {
        $dropDownList = [
            'module_type' => [
                1 => '横排(右滚动)',
                2 => '多列(三列)',
                3 => '竖排(下滚动)',
            ],
            'distribution_enabled' => [
                0 => '关闭',
                1 => '启用',
            ],
            'category_type' => [
                1 => '一级菜单',
                2 => '两级菜单',
            ],
            'group_enabled' => [
                0 => '关闭',
                1 => '启用',
            ],
            'balances_pay_enabled' => [
                0 => '关闭',
                1 => '启用',
            ],
            'exchange_enabled' => [
                0 => '关闭',
                1 => '启用',
            ],
            'layout_enabled' => [
                0 => '关闭',
                1 => '启用',
            ],

        ];
        //根据具体值显示对应的值
        if ($value !== null)
            return array_key_exists($column, $dropDownList) ? $dropDownList[$column][$value] : false;
        //返回关联数组，用户下拉的filter实现
        else
            return array_key_exists($column, $dropDownList) ? $dropDownList[$column] : false;
    }


    public function txtUpload()
    {
        $path = Yii::getAlias('@wechat') . '/web/';
        $this->txt_name = $this->txtFile->name;
        if ($this->txtFile->saveAs($path . $this->txtFile->name)) {
            return $this->save() ? true : false;
        }
    }

    public static function type($type)
    {
        $model = self::findOne(1);
        switch ($type) {
            case 'is_new':
                return $model->new_type;
            case 'is_hot':
                return $model->hot_type;
            case 'is_best':
                return $model->best_type;
        }
    }
}
