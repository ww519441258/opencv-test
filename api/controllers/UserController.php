<?php
/**
 * Created by PhpStorm.
 * User: travis
 * Date: 19-9-9
 * Time: 上午10:05
 */

namespace api\controllers;

use api\models\forms\LoginForm;
use Yii;
use yii\filters\auth\QueryParamAuth;
use yii\helpers\ArrayHelper;

class UserController extends CommonController
{
    public $modelClass = 'common\models\User';
    public $noAclAction = ['login'];

    public function behaviors()
    {
        return ArrayHelper::merge(parent::behaviors(), [
            'authenticatior' => [
                'class' => QueryParamAuth::className(), //实现access token认证
                'except' => ['miniprogram-login', 'login', 'signup', 'test'], //无需验证access token的方法，注意区分$noAclLogin
            ]
        ]);
    }
    /**
     * @return array
     * @throws \yii\base\Exception
     * @throws \yii\db\Exception
     * H5登录
     */
    public function actionLogin()
    {
        $model = new LoginForm();
        $model->openid = Yii::$app->request->get('openid');
        $accessToken = $model->login();
        if ($accessToken) {
            return ['status' => self::STATUS_SUCCESS, 'access_token' => $accessToken];
        } else {
            $model->validate();
            $errors = $model->getErrors();
            return ['status' => self::STATUS_FALSE, 'errors' => $errors];
        }
    }
}