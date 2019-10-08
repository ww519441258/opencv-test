<?php

use yii\db\Migration;

/**
 * Class m180718_090509_create_table_config
 */
class m180718_090509_create_table_config extends Migration
{
    public function up()
    {
        $sql = file_get_contents(__DIR__."/sql/kcs_config.sql");
        $this->execute($sql);
    }

    public function down()
    {
        $this->dropTable('kcs_config');
        return true;
    }
}
