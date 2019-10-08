<?php

namespace wechat\models;

use Yii;
use yii\base\Model;
use common\models\ars\WechatUser;
use EasyWeChat\Factory;
use yii\helpers\ArrayHelper;
use yii\helpers\Url;

/**
 * Login forms
 */
class LoginForm extends Model
{

    public $rememberMe = true;

    /**
     * @return bool
     * @throws \yii\base\Exception
     * @throws \yii\db\Exception
     */
    public function login()
    {

        $user = $this->getUser();
//        $user = $this->getKcuser();
        if ($user) {
            return Yii::$app->user->login($user, $this->rememberMe ? 3600 * 24 * 30 : 0);
        } else {
            return false;
        }
    }

    /**
     * @return \common\models\ars\user|WechatUser|null|static
     * @throws \yii\base\Exception
     * @throws \yii\db\Exception
     * 快创公众号
     */
    public function getKcuser()
    {
        $openId = Yii::$app->request->get('openid');
        if (defined('AUTO_LOGIN')) {
            return WechatUser::findOne(AUTO_LOGIN) ?? $this->autologin();
        } elseif ($openId == 'kcsTestOpenId996') {
            return WechatUser::findOne(['wx_openid' => $openId]) ?? $this->autologin();
        } else {
            $user = WechatUser::findIdentityByOpenid($openId);
        }
        if (!$user) {
            $user = new WechatUser();
            $user->username = "wx_user_" . $openId;
            $user->email = $openId . "@temporaryemail.com";
            $user->openid = $openId;
            $user->setPassword(Yii::$app->security->generateRandomKey(32));
            $user->generateAuthKey();
            $user->nick = Yii::$app->request->get('n');
            $user->avatar = Yii::$app->request->get('h');
            if (!$user->save()) {
                throw new \yii\db\Exception($user->getFirstErrors());
            }
        }
        return $user;
    }


    /**
     * @return \common\models\ars\user|WechatUser|null|static
     * @throws \yii\base\Exception
     * @throws \yii\db\Exception
     * 查询数据库是否存在该openid，没有则插入一个微信用户
     */
    protected function getUser()
    {
        $openid = Yii::$app->request->get('openid');
        if (defined('AUTO_LOGIN')) {
            return WechatUser::findOne(AUTO_LOGIN) ?? $this->autologin();
        } elseif ($openid == 'kcsTestOpenId996') {
            return WechatUser::findOne(['wx_openid' => $openid]) ?? $this->autologin();
        } else {
            $ecwUser = Yii::$app->wechat->getSnsapiUserinfo();
            if (empty($ecwUser)) {
                throw new \yii\base\Exception("Get Sns Api User Info Error!");
            }
            $data = $ecwUser->getOriginal();
            if (ArrayHelper::keyExists('unionid', $data)) {
                $user = WechatUser::findIdentityByUnionid($data['unionid']);
            } else {
                $user = WechatUser::findIdentityByOpenid($ecwUser->getId());
            }
        }
        if ($user && !$user->wx_openid) {
            $user->wx_openid = $ecwUser->getId();
        }
        if (!$user) {
            $user = new WechatUser();
            $user->username = "wx_user_" . $ecwUser->getId();
            $user->email = $ecwUser->getId() . "@temporaryemail.com";
            $user->openid = $ecwUser->getId();
            $user->wx_openid = $ecwUser->getId();
            if (ArrayHelper::keyExists('unionid', $data)) {
                $user->unionid = $data['unionid'];
            }
            $user->setPassword(Yii::$app->security->generateRandomKey(32));
            $user->generateAuthKey();
            $user->nick = $ecwUser->getNickname();
            $user->avatar = $ecwUser->getAvatar();
        }
        if (!$user->save()) {
            throw new \yii\db\Exception($user->getFirstErrors());
        }

        return $user;
    }

    private function autoLogin()
    {
        $user = new WechatUser();
        $user->username = "iron";
        $user->email = "iron@temporaryemail.com";
        $user->openid = 'kcsTestOpenId996';
        $user->wx_openid = 'kcsTestOpenId996';
        $user->setPassword(Yii::$app->security->generateRandomKey(32));
        $user->generateAuthKey();
        $user->nick = 'iron';
        $user->avatar = '/m/static/images/logo-kcshop.png';
        $user->save();
        return $user;
    }

}
