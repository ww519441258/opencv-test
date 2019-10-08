<?php

use wechat\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
    <!DOCTYPE html>
    <html lang="<?= Yii::$app->language ?>">
    <head>
        <meta charset="<?= Yii::$app->charset ?>">
        <?php
        $this->registerMetaTag(['name' => 'viewport', 'content' => 'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1']);
        $this->registerMetaTag(['http-equiv' => 'X-UA-Compatible', 'content' => 'ie=edge']);
        ?>
        <?php $this->head() ?>
    </head>

    <body>
    <?php $this->beginBody() ?>
    <script>
        var openid = "<?= Yii::$app->user->identity->openid?>"
        
    </script>
    <?= $content ?>

    <?php $this->endBody() ?>
    </body>
    </html>
<?php $this->endPage() ?>