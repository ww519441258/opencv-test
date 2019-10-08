<?php

namespace api\models\forms;

use common\models\ars\WechatUser;
use Yii;
use yii\base\Exception;
use yii\base\Model;
use common\models\User;
use yii\caching\FileCache;

/**
 * Login forms
 */
class LoginForm extends Model
{

    const EXPIRE_TIME = 604800;

    public $username;
    public $password;
    public $openid;
    public $unionid;
    public $nickname;
    public $avatar;
    public $code;
    private $_user;
    private $session_key;

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
//            [['username', 'password'], 'required'],
            ['password', 'validatePassword'],
        ];
    }

    /**
     * Validates the password.
     * This method serves as the inline validation for password.
     *
     * @param string $attribute the attribute currently being validated
     * @param array $params the additional name-value pairs given in the rule
     */
    public function validatePassword($attribute, $params)
    {

        if (!$this->hasErrors()) {
            $user = $this->getUser();
            if (!$user || !$user->validatePassword($this->password)) {
                $this->addError($attribute, 'Incorrect username or password.');
            }
        }
    }

    public function miniProgramLogin()
    {
        try {
            $res = Yii::$app->miniprogram->getSession($this->code);
        } catch (\Exception $e) {
            return ['status' => false, 'info' => '小程序授权登录失败，请检查appid和secret是否配置正确'];
        }
        if (isset($res['errcode']) && $res['errcode'] != 0) {
            return ['status' => false, 'info' => $res['errmsg']];
        }
        if (isset($res['unionid'])) {
            $this->unionid = $res['unionid'];
        }
        $this->openid = $res['openid'];
        if ($this->getMiniUser()) {
            $accessToken = $this->_user->generateAccessToken();
            $this->_user->expire_at = time() + static::EXPIRE_TIME;
            $this->_user->session_key = $res['session_key'];
            if (!$this->_user->save()) {
                return ['status' => false, 'info' => '用户信息获取失败'];
            }
            if ($this->_user->re_authorization == User::RE_AUTHORIZATION_YES) {
                return ['status' => true, 'reAuthorization' => true, 'accessToken' => $accessToken];
            }
            Yii::$app->user->login($this->_user, static::EXPIRE_TIME);
            return ['status' => true, 'accessToken' => $accessToken];
        }
        return ['status' => false, 'info' => '获取用户失败'];
    }

    /**
     * @return bool
     * @throws Exception
     * @throws \yii\db\Exception
     */
    public function login()
    {
        if ($this->getUser()) {

            $accessToken = $this->_user->generateAccessToken();
            $this->_user->expire_at = time() + static::EXPIRE_TIME;
            $this->_user->save();
            Yii::$app->user->login($this->_user, static::EXPIRE_TIME);
            return $accessToken;
        }

        return false;
    }

    /**
     * @return null|static
     * @throws Exception
     * @throws \yii\db\Exception
     */
    protected function getUser()
    {
        if ($this->_user == null) {
//            $this->_user = User::findByUsername($this->username);
            $this->_user = WechatUser::findIdentityByOpenid($this->openid);
        }

        return $this->_user;
    }

    /**
     * @return WechatUser|null|static
     * @throws Exception
     * @throws \yii\db\Exception
     * 小程序登陆
     */
    protected function getMiniUser()
    {
        if ($this->_user == null) {
//            $this->_user = User::findByUsername($this->username);
            if ($this->unionid) {
                $this->_user = User::findByUnionid($this->unionid);
            } else {
                $this->_user = User::findByOpenid($this->openid);
            }
        }
        if ($this->_user && !$this->_user->mini_openid) {
            $this->_user->mini_openid = $this->openid;
        }
        if (!$this->_user && $this->openid) {
            $this->_user = new WechatUser();
            $this->_user->username = "wx_user_" . $this->openid;
            $this->_user->email = $this->openid . "@temporaryemail.com";
            $this->_user->mini_openid = $this->openid;
            $this->_user->openid = $this->openid;
            if ($this->unionid) {
                $this->_user->unionid = $this->unionid;
            }
            $this->_user->setPassword(Yii::$app->security->generateRandomKey(32));
            $this->_user->generateAuthKey();
            $this->_user->nick = $this->nickname ?: '';
            $this->_user->avatar = $this->avatar ?: '';
            $this->_user->session_key = $this->session_key;
            if (!$this->_user->save()) {
                throw new \yii\db\Exception($this->_user->getFirstErrors());
            }
        }

        return $this->_user;

    }

}
