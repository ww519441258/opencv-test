<?php

use CV\Face\LBPHFaceRecognizer, CV\CascadeClassifier, CV\Scalar, CV\Point;
use CV\Size;
use function CV\{imread, cvtColor, equalizeHist};
use const CV\{COLOR_BGR2GRAY, CV_HAAR_SCALE_IMAGE, CV_HAAR_DO_CANNY_PRUNING};

// face by lbpcascade_frontalface
$faceClassifier = new CascadeClassifier();
$faceClassifier->load('models/lbpcascades/lbpcascade_frontalface.xml');
//$faceClassifier->load('xml/haarcascade_frontalface_alt2.xml');//加载人脸识别分类器

$faceRecognizer = LBPHFaceRecognizer::create();
$labels = ['unknown', 'me', 'angelina', 'travis'];

// me
$src = imread("images/faces.jpg");
$gray = cvtColor($src, COLOR_BGR2GRAY);
$faceClassifier->detectMultiScale($gray, $faces);
//var_export($faces);
equalizeHist($gray, $gray);
$faceImages = $faceLabels = [];
foreach ($faces as $k => $face) {
    $faceImages[] = $gray->getImageROI($face); // face coordinates to image
    $faceLabels[] = 1; // me
//    cv\imwrite("results/recognize_face_by_lbph_me$k.jpg", $gray->getImageROI($face));
}
$faceRecognizer->train($faceImages, $faceLabels);

//angelina
$src = imread("images/angelina_faces.png");
$gray = cvtColor($src, COLOR_BGR2GRAY);
$faceClassifier->detectMultiScale($gray, $faces);
//var_export($faces);
equalizeHist($gray, $gray);
$faceImages = $faceLabels = [];
foreach ($faces as $k => $face) {
    $faceImages[] = $gray->getImageROI($face); // face coordinates to image
    $faceLabels[] = 2; // Angelina
    //cv\imwrite("results/recognize_face_by_lbph_angelina$k.jpg", $gray->getImageROI($face));
}
$faceRecognizer->update($faceImages, $faceLabels);
//$faceRecognizer->write('results/lbph_model.xml');
//$faceRecognizer->read('results/lbph_model.xml');

//travis
$src = imread('images/travis2.png');
$gray = cvtColor($src, COLOR_BGR2GRAY);

while (true) {
    \CV\imshow('faces2',$gray);
    if (\CV\waitKey(50) >= 0) {
        break;
    }
}

$faceClassifier->detectMultiScale($gray, $faces);
equalizeHist($gray, $gray);  //直方图均衡化
$faceImages = $faceLabels = [];
foreach ($faces as $k => $face) {
    $faceImages[] = $gray->getImageROI($face);
    $faceLabels[] = 3; // travis
}
$faceRecognizer->update($faceImages, $faceLabels);

// test image
//$src = imread("images/angelina_and_me.png");
//$src = imread("images/face3.png");
$src = imread("images/angelina_and_me_and_travis.png");
$gray = cvtColor($src, COLOR_BGR2GRAY);
//while (true) {
//    \CV\imshow('faces2',$gray);
//    if (\CV\waitKey(50) >= 0) {
//        break;
//    }
//}
$faceClassifier->detectMultiScale($gray, $faces, 1.1, 3, CV_HAAR_DO_CANNY_PRUNING, new Size(60, 60), new Size(240,240));
//var_export($faces);
equalizeHist($gray, $gray);

foreach ($faces as $face) {
    $faceImage = $gray->getImageROI($face);

//    $isStop = false;
//    while (!$isStop) {
//        \CV\imshow('test', $faceImage);
//        if (\CV\waitKey(50) >= 0) {
//            $isStop = true;
//        }
//    }

    //predict
    $faceLabel = $faceRecognizer->predict($faceImage);
    echo "{$faceLabel}\n";

    $scalar = new \CV\Scalar(0, 0, 255);
    \CV\rectangleByRect($src, $face, $scalar, 2);  //加脸部的框
    $text = $labels[$faceLabel];
    //添加文字背景色
    \CV\rectangle($src, $face->x, $face->y, $face->x + ($faceLabel == 1 ? 50 : 130), $face->y - 30, new Scalar(255,255,255), -2);
    //添加文字
    \CV\putText($src, "$text", new Point($face->x, $face->y - 2), 0, 1.5, new Scalar(), 2);
}

cv\imwrite("results/_recognize_face_by_lbph.jpg", $src);
