<?php

namespace wechat\controllers;

use common\models\ars\Config;
use common\models\ars\Goods;
use common\models\ars\MemberTierPointsLog;
use common\models\ars\WechatUser;
use common\models\User;
use travis\groupbooking\models\ars\GroupBookingRegiment;
use Yii;
use yii\filters\AccessControl;
use wechat\models\SignupForm;
use wechat\models\LoginForm;

/**
 * Site controller
 */
class SiteController extends CommonController
{

    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {

        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'actions' => ['check', 'login', 'signup', 'test', 'error'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['index', 'logout', 'error', 'test', 'login', 'dealmemberrelation'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }

    public function actionCheck()
    {
        $res = Yii::$app->wechat->send();
        $res->send();
    }

    /**
     * @return \yii\web\Response
     * 中北泰扫码进入页面，绑定上下级关系
     */
    public function actionDealmemberrelation()
    {
        $data = Yii::$app->request->get('data');
        $res = Yii::$app->distribution->dealMemberRelation($data);
        if ($res > 0) {
            //显示绑定上下级关系成功的页面
            return $this->redirect('http://' . Yii::$app->params['domainName'] . '/#/superior');
        }
    }

    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'kcdev\yii2\web\KcErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }


    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionIndex()
    {
        User::setDau();
        return $this->renderPartial('@app/web/m/index.html');

    }

    /**
     * @return \yii\web\Response
     * @throws \yii\base\Exception
     * @throws \yii\db\Exception
     */
    public function actionLogin()
    {
        $params = Yii::$app->request->queryString;
        $url= Yii::$app->config->getConfig()->wx_domain_name . '?' . $params;
        if (!Yii::$app->user->isGuest) {
            return $this->redirect($url);
        }
        $model = new LoginForm();
        if ($model->login()) {
            return $this->goBack($url);
        }
    }

    /**
     * Logs out the current user.
     *
     * @return mixed
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }


}
