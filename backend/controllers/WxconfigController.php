<?php

namespace backend\controllers;

use common\models\ars\uploadForm;
use Yii;
use common\models\ars\Config;
use common\models\searchs\ConfigSearch;
use yii\base\Response;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * ConfigController implements the CRUD actions for Config model.
 */
class WxconfigController extends CommonController
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Config models.
     * @return mixed
     */
    public function actionIndex()
    {
        return $this->render('index', [
            'model' => Config::find()->one(),
        ]);
    }


    public function actionAuthor()
    {
        return $this->redirect('http://concloud.kcshop.com.cn/site/auth?return_url=' . Yii::$app->request->hostName);

    }

    public function actionReset()
    {
        $config = Config::find()->one();
        if ($config->service_setting == 1) {
            $config->service_setting = 0;
            if ($config->save()) {
               return $this->redirect('setting?id=1');
            }
        }
    }

    /**
     * Displays a single Config model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    public function actionInfos()
    {
        return $this->renderPartial('infos');
    }

    public function actionSetting($id)
    {
        $model = $this->findModel($id);
        if ($model->service_setting == 0) {
            $model->wx_url = $model->api_domain_name . '/infos/receive';
            $model->wx_token = 'kcshop_' . $model->generateRandomNum(5);
            $model->aes_key = $model->generateRandomNum(43);
            $model->save();
        }
        return $this->render('service_setting', ['model' => $model]);
    }

    /**
     * Updates an existing Config model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['index']);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    public function actionUpload()
    {
        Yii::$app->response->format = 'json';
        $model = Config::find()->one();
        $model->file = UploadedFile::getInstance($model, 'file');
        if (!$model->upload('wx')) {
            return ['error' => '文件上传失败'];
        }
        return ['certPath' => $model->wx_certPath, 'keyPath' => $model->wx_keyPath];
    }

    public function actionTxtUpload()
    {
        Yii::$app->response->format = 'json';
        $model = Config::find()->one();
        $model->txtFile = UploadedFile::getInstance($model, 'txtFile');
        if (!$model->txtUpload()) {
            return ['error' => '文件上传失败'];
        }
        return ['success' => 'yes'];
    }


    public function actionFileDelete()
    {
        Yii::$app->response->format = 'json';
        $tag = Yii::$app->request->post()['key'];
        $config = Config::find()->one();
        if ($tag == 'key') {
            $config->wx_keyPath = '';
        } elseif ($tag == 'cert') {
            $config->wx_certPath = '';
        } elseif ($tag == 'txt') {
            $config->txt_name = '';
        }
        if ($config->save()) {
            return ['success' => 'success'];
        } else {
            return ['error' => '上传失败'];
        }
    }

    /**
     * Finds the Config model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Config the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Config::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
