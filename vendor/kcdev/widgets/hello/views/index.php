<?php
use kcdev\widgets\hello\HelloAsset;
HelloAsset::register($this);
?>
<script>
    var message = '<?= $message ?>'
</script>
<div id="hello">
    {{ message }}
</div>