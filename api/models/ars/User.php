<?php

namespace api\models\ars;

use Yii;
use yii\db\ActiveRecord;
use yii\web\Link;
use yii\web\Linkable;
use yii\helpers\Url;

/**
 * User model
 *
 * @property integer $id
 * @property string $username
 * @property string $password_hash
 * @property string $password_reset_token
 * @property string $email
 * @property string $auth_key
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 * @property string $password write-only password
 */
class User extends ActiveRecord {

    public static function tableName() {
        return '{{%user}}';
    }

    public function fields() {

        $fields = parent::fields();

        unset($fields['auth_key']);
        unset($fields['updated_at']);
        unset($fields['password_hash']);
        unset($fields['updated_at']);
        unset($fields['password_reset_token']);
        $fields['created_at'] = function($model) {
            return date("Y-m-d H:i", $model->created_at);
        };
        $fields['expire_at'] = function($model) {
            return date("Y-m-d H:i", $model->expire_at);
        };

        return $fields;
    }

}
