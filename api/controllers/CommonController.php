<?php

namespace api\controllers;

use common\models\ars\Goods;
use common\models\ars\MemberTierPointsLog;
use common\models\ars\TagsRelationGoods;
use Illuminate\Support\Facades\Response;
use Yii;
use yii\rest\ActiveController;
use travis\groupbooking\models\ars\GroupBookingRegiment;

/**
 * Common controller
 */
class CommonController extends ActiveController
{
    const STATUS_FALSE = -1;
    const STATUS_SUCCESS = 1;
    const STATUS_NO_ADDRESS = 2;
    const STATUS_RE_AUTHORIZATION = 2;

    /**
     * @param \yii\base\Action $action
     * @return bool
     * @throws \yii\web\BadRequestHttpException
     */
    public function beforeAction($action)
    {
        Yii::$app->response->headers->set('Access-Control-Allow-Origin', '*');
        if (Yii::$app->request->isOptions) {
            Yii::$app->response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            Yii::$app->response->headers->set('Access-Control-Allow-Headers',
                Yii::$app->request->headers->get('Access-Control-Request-Headers'));
            return Yii::$app->response->send();
        }
        return parent::beforeAction($action);
    }

    public function actions()
    {
        $actions = parent::actions();
        unset($actions['index']);
        unset($actions['update']);
        unset($actions['delete']);
        unset($actions['create']);
        unset($actions['view']);
        return $actions;
    }


}
