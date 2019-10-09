<?php
/**
 * Created by PhpStorm.
 * User: travis
 * Date: 19-9-27
 * Time: 上午11:06
 */
use CV\Mat;
use CV\Size;
use CV\Scalar;
use CV\Point;
use function CV\ {
    imshow, cvtColor, threshold, waitKey, adaptiveThreshold, floodFill, rectangleByRect,
    drawContours, GaussianBlur, medianBlur, findContoursWithoutHierarchy, boundingRect, rectangle, erode, findContours
};
use const CV\ {
    COLOR_BGR2GRAY, THRESH_BINARY_INV, RETR_CCOMP, CHAIN_APPROX_SIMPLE, RETR_EXTERNAL, CV_8U
};


//加载原图
$src = CV\imread('images/idcard.png');

//显示原图
//imshow("原图", $src);

//转为灰度
$dst = cvtColor($src, COLOR_BGR2GRAY);

//高斯模糊，主要用于降噪
GaussianBlur($dst, $dst, new Size(3, 3), 0);
//imshow("GaussianBlur图", $dst);

// 二值化图，主要将灰色部分转成白色，使内容为黑色
threshold($dst, $dst, 100, 255, THRESH_BINARY_INV); //去掉噪，例如过滤很小或很大像素值的图像点。
//imshow("threshold图", $dst);

// 中值滤波，同样用于降噪
medianBlur($dst, $dst, 3);
//imshow("medianBlur图", $dst);

// 腐蚀操作，主要将内容部分向高亮部分腐蚀，使得内容连接，方便最终区域选取
erode($dst, $dst, new Mat(9, 9, CV_8U));
//imshow("erode图", $dst);


$contours = [];
$hierarchy = 1;
//轮廓层级提取
findContoursWithoutHierarchy($dst, $contours, RETR_CCOMP, CHAIN_APPROX_SIMPLE);
drawContours($dst, $contours, -1, new Scalar(0, 255, 0), -1);

print_r($contours);die;

for ($i = 0; $i < count($contours); $i++) {
    $rect = boundingRect($contours[$i]); //维点模板类);

//    rectangle($src, $rect->x / 2 + 8, $rect->y, $rect->x + 115, $rect->y - 20, new Scalar(255, 0, 255));
    rectangle($src, $rect->x, $rect->y, $rect->x + 115, $rect->y - 20, new Scalar(255, 0, 255));
    imshow('src', $src);
    while (true) {
        if (waitKey(10) >= 0 ) {
            break;
        }
    }
//    $result = $src->rect;
    if ($rect->y > $src->rows / 2 && $rect->width / $rect->height > 6) {
        echo 333;die;
        imshow("身份证号", $result);
    }
    imshow("轮廓图", $src);
}
while (true) {
    if (waitKey(10) >= 0 ) {
        break;
    }
}
