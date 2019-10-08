<?php
use kcdev\widgets\Menu;
use kcdev\iron\menu\MenuHelper;

$items = MenuHelper::getAssignedMenu(Yii::$app->user->id, NULL, NULL, 1);
?>

<aside class="main-sidebar">

    <section class="sidebar">

        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="/img/avatar.jpg" class="img-circle" alt="User Image"/>
            </div>
            <div class="pull-left info">
                <p><?php echo(Yii::$app->user->identity->username) ?></p>

                <a href="#"><i class="fa fa-circle text-success"></i>在线</a>
            </div>
        </div>

        <!-- search form -->
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search..."/>
              <span class="input-group-btn">
                <button type='submit' name='search' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
            </div>
        </form>
        <!-- /.search form -->

        <?PHP
        //        d($items);
        echo Menu::widget(
            [
                'options' => ['class' => 'sidebar-menu tree', 'data-widget' => 'tree'],
                'items' => $items
            ]);
        ?>

    </section>

</aside>
