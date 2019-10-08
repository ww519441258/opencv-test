<?php

use yii\db\Migration;

/**
 * Class m180808_101335_add_columns_about_wx_in_table_config
 */
class m180808_101335_add_columns_about_wx_in_table_config extends Migration
{
    public function up()
    {
        $this->addColumn('kcs_config', 'wx_appId', $this->string(50)->comment('微信公众号appId'));
        $this->addColumn('kcs_config', 'wx_secret', $this->string(50)->comment('微信公众号appId'));
        $this->addColumn('kcs_config', 'mini_program_appId', $this->string(50)->comment('小程序appId'));
        $this->addColumn('kcs_config', 'mini_program_secret', $this->string(50)->comment('小程序appId'));
        $this->addColumn('kcs_config', 'wx_mchId', $this->string(50)->comment('商户号'));
        $this->addColumn('kcs_config', 'wx_key', $this->string(50)->comment('支付密钥'));
        $this->addColumn('kcs_config', 'wx_certPath', $this->string(255)->comment('微信证书路径'));
        $this->addColumn('kcs_config', 'wx_keyPath', $this->string(255)->comment('微信证书密钥路径'));
        $this->addColumn('kcs_config', 'api_domain_name', $this->string(255)->comment('api域名'));
    }

    public function down()
    {
        $this->dropColumn('kcs_config','wx_appId');
        $this->dropColumn('kcs_config','wx_secret');
        $this->dropColumn('kcs_config','mini_program_appId');
        $this->dropColumn('kcs_config','mini_program_secret');
        $this->dropColumn('kcs_config','wx_mchId');
        $this->dropColumn('kcs_config','wx_key');
        $this->dropColumn('kcs_config','wx_certPath');
        $this->dropColumn('kcs_config','wx_keyPath');
        $this->dropColumn('kcs_config','api_domain_name');
        return true;
    }
}
