<?php

return [
    "系统管理" => [
        'icon' => 'system',
        'children' => [
            ["基础参数设置", "/config"],
            ["微信公众号参数配置", "/wxconfig"],
        ]
    ],
    "权限管理" => [
        'icon' => 'permission',
        'children' => [
            ["管理员管理", "/adminuser"],
            ["角色管理", "/admin/role"],
            ["权限管理", "/admin/permission"],
        ]
    ],
];