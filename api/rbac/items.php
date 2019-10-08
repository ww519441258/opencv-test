<?php
return [
    '*' => [
        'type' => 2,
        'description' => '*',
    ],
    'users/*' => [
        'type' => 2,
        'description' => 'users/*',
    ],
    'users/index' => [
        'type' => 2,
        'description' => 'users/index',
    ],
    'users/view' => [
        'type' => 2,
        'description' => 'users/view',
    ],
    'users/create' => [
        'type' => 2,
        'description' => 'users/create',
    ],
    'users/update' => [
        'type' => 2,
        'description' => 'users/update',
    ],
    'users/delete' => [
        'type' => 2,
        'description' => 'users/delete',
    ],
    'users/options' => [
        'type' => 2,
        'description' => 'users/options',
    ],
    'users/login' => [
        'type' => 2,
        'description' => 'users/login',
    ],
    'users/signup' => [
        'type' => 2,
        'description' => 'users/signup',
    ],
    'common-rule' => [
        'type' => 1,
        'description' => 'description',
        'children' => [
            'users/*',
        ],
    ],
    '/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/site/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/config/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/config/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/slideshow' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/slideshow/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/slideshow/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/slideshow/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/slideshow/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/slideshow/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/adminuser/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/adminuser/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/adminuser/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/adminuser/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/adminuser/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/adminuser/resetpwd' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/adminuser/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/stores/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/stores/stores/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/stores/stores/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/stores/stores/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/stores/stores/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/stores/stores/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/tags/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/tags/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/tags/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/tags/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/tags/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/tags/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/attribute/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/attribute/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/attribute/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/attribute/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/attribute/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/attribute/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/category/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/goods/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/goods/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/goods/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/goods/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/goods/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/goods/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/goods/upload' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/image/upload' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/image/remove' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/member/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/member/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/member/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/member/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/member/set-delveryman' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/member-rank/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/member-rank/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/member-rank/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/member-rank/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/member-rank/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/advice' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/account' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/distribution/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/distribution/setting' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/distribution/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/distribution/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/distribution/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/distribution/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/distribution/commission' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/distribution/distribution/withdraw' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/shipping/shipping/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/shipping/shipping/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/shipping/shipping/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/shipping/shipping/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/shipping/shipping/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/shipping/shipping-setting/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/shipping/shipping-setting/add-template' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/shipping/shipping-setting/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/shipping/shipping-setting/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/shipping/shipping-setting/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/order/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/order/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/order/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/order/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/order/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/order/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/verify-log/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/delivery/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/goods/report' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/questionnaire/questionnaire/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/questionnaire/questionnaire/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/questionnaire/questionnaire/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/questionnaire/questionnaire/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/questionnaire/questionnaire/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/questionnaire/questionnaire-log/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/questionnaire/questionnaire-log/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/exchange/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/exchange/goods/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/exchange/goods/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/exchange/goods/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/exchange/goods/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/exchange/goods/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/exchange/medicinecode/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/exchange/medicinecode/add' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/coupon/coupon/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/coupon/coupon/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/coupon/coupon/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/coupon/coupon/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/coupon/coupon/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/coupon/coupon/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/coupon/coupon-record/*' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/coupon/coupon-record/index' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/coupon/coupon-record/create' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/coupon/coupon-record/view' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/coupon/coupon-record/update' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/coupon/coupon-record/delete' => [
        'type' => 1,
        'description' => 'description',
    ],
    '/advice' => [
        'type' => 1,
        'description' => 'description',
    ],
    'sasa' => [
        'type' => 1,
        'description' => 'description',
    ],
];
