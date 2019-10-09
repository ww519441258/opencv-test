<?php

namespace kcdev\widgets;

use dmstr\widgets\Menu as dmstrMenu;

/**
 * Description of Menu
 *
 * @author blobt
 */
class Menu extends dmstrMenu {

    private $noDefaultAction;
    private $noDefaultRoute;

    protected function isItemActive($item) {
        if (isset($item['url']) && is_array($item['url']) && isset($item['url'][0])) {
            $route = $item['url'][0];
            if ($route[0] !== '/' && Yii::$app->controller) {
                $route = ltrim(Yii::$app->controller->module->getUniqueId() . '/' . $route, '/');
            }

            $route = ltrim($route, '/');

            if ($route != substr($this->route,0, strrpos($this->route, '/'))&&
                    $route != $this->route && $route !== $this->noDefaultRoute && $route !== $this->noDefaultAction) {

                return false;
            }
            unset($item['url']['#']);
            if (count($item['url']) > 1) {
                foreach (array_splice($item['url'], 1) as $name => $value) {
                    if ($value !== null && (!isset($this->params[$name]) || $this->params[$name] != $value)) {
                        return false;
                    }
                }
            }
            return true;
        }
        return false;
    }

}
