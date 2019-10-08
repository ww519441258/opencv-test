<?php

use yii\db\Migration;

/**
 * Class m180917_083136_add_column_some_params_in_config
 */
class m180917_083136_add_column_some_params_in_config extends Migration
{
    public function up()
    {
        $this->addColumn('kcs_config', 'txt_name', $this->string(255)->comment('网页授权txt文件路径'));
        $this->addColumn('kcs_config', 'wx_domain_name', $this->string(255));
        $this->addColumn('kcs_config', 'wx_token', $this->string(50)->comment('微信token'));
        $this->addColumn('kcs_config', 'wx_url', $this->string(255));
        $this->addColumn('kcs_config', 'aes_key', $this->string(43)->after('wx_url'));
        $this->addColumn('kcs_config', 'service_setting', $this->integer(1)->notNull()->defaultValue(0)->after('aes_key'));
        $this->addColumn('kcs_config', 'menu_setting', $this->text());
        $this->addColumn('kcs_config', 'company_logo', $this->string(255)->notNull()->defaultValue('/img/logo-kcshop-transparent.png'));
        $this->addColumn('kcs_config', 'company_content', $this->string(255)->notNull()->defaultValue('快创信息科技有限公司'));
    }

    public function down()
    {
        $this->dropColumn('kcs_config', 'txt_name');
        $this->dropColumn('kcs_config', 'wx_domain_name');
        $this->dropColumn('kcs_config', 'wx_token');
        $this->dropColumn('kcs_config', 'wx_url');
        $this->dropColumn('kcs_config', 'aes_key');
        $this->dropColumn('kcs_config', 'service_setting');
        $this->dropColumn('kcs_config', 'menu_setting');
        $this->dropColumn('kcs_config', 'company_logo');
        $this->dropColumn('kcs_config', 'company_content');
        return true;
    }
}
