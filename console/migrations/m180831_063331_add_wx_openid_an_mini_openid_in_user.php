<?php

use yii\db\Migration;

/**
 * Class m180831_063331_add_wx_openid_an_mini_openid_in_user
 */
class m180831_063331_add_wx_openid_an_mini_openid_in_user extends Migration
{
    public function up()
    {
        $this->addColumn('user', 'openid', $this->string(32)->after('status')->notNull());
        $this->addColumn('user', 'nickname', $this->string(128)->after('openid')->defaultValue(''));
        $this->addColumn('user', 'avatar', $this->string(255)->after('nickname')->defaultValue(''));
        $this->addColumn('user', 'unionid', $this->string(32)->after('nickname')->notNull());
        $this->addColumn("user", "is_follow", $this->smallInteger(1)->after('unionid')->defaultValue(0));
        $this->addColumn('user', 'name', $this->string(5)->after('password_reset_token')->defaultValue(''));
        $this->addColumn("user", "tel", $this->string(11)->after('name')->defaultValue(''));
        $this->addColumn('user', 'wx_openid', $this->string(120)->defaultValue('')->comment('公众号openid'));
        $this->addColumn('user', 'mini_openid', $this->string(120)->defaultValue('')->comment('小程序openid'));
    }

    public function down()
    {
        $this->dropColumn('user', 'openid');
        $this->dropColumn('user', 'nickname');
        $this->dropColumn('user', 'avatar');
        $this->dropColumn('user', 'unionid');
        $this->dropColumn('user', 'is_follow');
        $this->dropColumn('user', 'name');
        $this->dropColumn('user', 'tel');
        $this->dropColumn('user', 'wx_openid');
        $this->dropColumn('user', 'mini_openid');
        return true;
    }
}
