<?php

use yii\db\Migration;

/**
 * Class m180328_073626_user_api
 */
class m180328_073626_user_api extends Migration
{


    
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->addColumn('user', 'access_token', $this->string(255)->after('status')->notNull()->defaultValue(''));
        $this->addColumn('user', 'expire_at', $this->integer(11)->after('access_token')->notNull()->defaultValue(0));
    }

    public function down()
    {
        $this->dropColumn('user', 'access_token');
        $this->dropColumn('user', 'expire_at');
        return true;
    }
}
