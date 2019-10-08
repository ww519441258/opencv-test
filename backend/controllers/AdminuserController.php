<?php

namespace backend\controllers;

use PhpOffice\PhpSpreadsheet\Calculation\Exception;
use Yii;
use common\models\ars\AdminUser;
use common\models\searchs\AdminUserSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use backend\models\SignupForm;
use backend\models\ResetPwd;

/**
 * AdminuserController implements the CRUD actions for AdminUser model.
 */
class AdminuserController extends CommonController
{
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

//    public function beforeAction($action)
//    {
//        if (Yii::$app->user->identity->stores_id !== 0) {
//            return false;
//        }
//        return parent::beforeAction($action);
//    }

    /**
     * Lists all AdminUser models.
     * @return mixed
     */
    public function actionIndex($tag = 0, $username = null)
    {
        $searchModel = new AdminUserSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'tag' => $tag,
            'username' => $username,
        ]);
    }

    /**
     * Displays a single AdminUser model.
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

    /**
     * Creates a new AdminUser model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {

        $model = new signupForm();

        if ($model->load(Yii::$app->request->post())) {
            $transaction = Yii::$app->db->beginTransaction();
            try {
                $auth = Yii::$app->authManager;
                $oRole = $auth->getRole(Yii::$app->request->post('SignupForm'));
                $user = $model->signup();
                if ($auth->assign($oRole, $user->id)) {
                    $transaction->commit();
                    return $this->redirect(['view', 'id' => $user->id]);
                } else {
                    throw new \Exception('assign save false');
                }
            } catch (\Exception $e) {
                $transaction->rollBack();
            }
        }
        return $this->render('create', [
            'model' => $model
        ]);
    }

    /**
     * @param $id
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException
     * 修改地址
     */
    public function actionResetpwd($id)
    {
        $model = new ResetPwd();
        $username = $this->findModel($id)->username;
        if ($model->load(Yii::$app->request->post())) {//load:块赋值 ；把表单中每个对应的属性赋值
            if ($model->reset($id)) {
                return $this->redirect(['index', 'tag' => 1, 'username' => $username]);
            }
        }
        return $this->render('reset_pwd', [
            'model' => $model, 'username' => $username,
        ]);
    }

    /**
     * Updates an existing AdminUser model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing AdminUser model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $user = $this->findModel($id);
//
//        return $this->redirect(['index']);
//        $user->status = 0;
        if ($user->delete()) {
            return $this->redirect(['index']);
        }

    }

    /**
     * Finds the AdminUser model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return AdminUser the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = AdminUser::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
