<?php
/**
 * Created by PhpStorm.
 * User: travis
 * Date: 19-9-25
 * Time: 下午4:28
 */

use CV\CascadeClassifier;
use CV\Size;
use CV\Mat;
use function CV\ {
    imread, cvtColor, equalizeHist, waitKey,resize,imwrite,imshow
};
use const CV\{
    COLOR_BGR2GRAY, CV_HAAR_DO_ROUGH_SEARCH
};

/**
 * @throws \CV\Exception
 * 对检测到的roi进行剪切并保存
 */
function roiResize()
{
    $cascadeClassifier = new CascadeClassifier();
    $cascadeClassifier->load('xml/haarcascade_frontalface_alt2.xml');

    $faces = [];
    $imgGray = null;
    $number = 10;
    for ($i = 1; $i <= $number; $i++) {
        $path = __DIR__.'/myPics/';
        if (!is_dir($path)) {
            mkdir($path, 0777);
        }
        $filePath = $path. 'pic'. $i . '.jpg';
        if (!file_exists($filePath)) {
            echo "file not found\n";
            exit;
        }
        $img = imread($filePath);
        $imgGray = cvtColor($img, COLOR_BGR2GRAY);
        equalizeHist($imgGray, $imgGray);
        $cascadeClassifier->detectMultiScale($imgGray, $faces, 1.1, 3, CV_HAAR_DO_ROUGH_SEARCH, new Size(50, 50));
        for ($j = 0; $j < count($faces); $j++) {
            $faceROI = $img->getImageROI($faces[$j]);
            $MyFace = null;
            if ($faceROI->cols > 100) {
                resize($faceROI, $MyFace, new Size(92, 112));
                $facePath = $path.'/myFaces/';
                if (!is_dir($facePath)) {
                    mkdir($facePath, 0777);
                }
                $facePath = $facePath.'/MyFcae' . $i . '.jpg';
                imwrite($facePath, $MyFace);
                imshow("ii", $MyFace);
            }
            waitKey(10);
        }
    }
}

roiResize();