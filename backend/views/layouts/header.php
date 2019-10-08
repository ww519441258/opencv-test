<?php
use yii\helpers\Html;

/* @var $this \yii\web\View */
/* @var $content string */
$name = Yii::$app->config->getConfig()->shop_name;
?>


<header class="main-header">

    <?= Html::a('<span class="logo-mini">' . $name . '后台管理' . '</span><span class="logo-lg">' . $name . '后台管理' . '</span>', Yii::$app->homeUrl, ['class' => 'logo']) ?>

    <nav class="navbar navbar-static-top" role="navigation">

        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
            <span class="sr-only">Toggle navigation</span>
        </a>

        <div class="navbar-custom-menu">

            <ul class="nav navbar-nav">
                <li class="dropdown user user-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <img src="/img/avatar.jpg" class="user-image" alt="User Image"/>
                        <span class="hidden-xs"><?=Yii::$app->user->identity->username?></span>
                    </a>
                    <ul class="dropdown-menu">
                        <!-- User image -->
                        <li class="user-header">
                            <img src="/img/avatar.jpg" class="img-circle"
                                 alt="User Image"/>
                            <p>
                                <?=Yii::$app->user->identity->username?>
                            </p>
                        </li>

                        <!-- Menu Footer-->
                        <li class="user-footer">
                            <div class="pull-left">
                            </div>
                            <div class="pull-right">
                                <?= Html::a(
                                    '退出登录',
                                    ['/site/logout'],
                                    ['data-method' => 'post', 'class' => 'btn btn-default btn-flat']
                                ) ?>
                            </div>
                        </li>
                    </ul>
                </li>

                <!-- User Account: style can be found in dropdown.less -->
                <li>
                    <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                </li>
            </ul>
        </div>
    </nav>
</header>
