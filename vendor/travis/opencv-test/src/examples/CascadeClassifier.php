<?php

namespace travis\opencvtest\examples;

use Yii;
use CV\Mat;
use CV\CascadeClassifier;
use CV\Size;
use CV\Point;
use CV\Scalar;
use CV\VideoCapture;
use const CV\{
    COLOR_BGR2GRAY, CASCADE_SCALE_IMAGE, CV_HAAR_DO_ROUGH_SEARCH
};
use function CV\{
    cvtColor, equalizeHist, ellipse, circle, imshow, waitKey,
    imread, resize,imwrite
};

class VideoCascadeClassifier
{
    public $face_cascade_name;
    public $eyes_cascade_name;
    public $face_cascade;
    public $eyes_cascade;
    public $window_name;

    public function __construct()
    {
        $this->face_cascade_name = Yii::getAlias('@vendor/travis/opencv-test/src/')."xml/haarcascade_frontalface_alt.xml";
        $this->eyes_cascade_name = Yii::getAlias('@vendor/travis/opencv-test/src/')."xml/haarcascade_eye_tree_eyeglasses.xml";
        $this->face_cascade = new CascadeClassifier();
        $this->eyes_cascade = new CascadeClassifier();
        $this->window_name = "Capture - Face detection";
    }

    function detectAndDisplay(Mat $frame)
    {
        global $face_cascade;
        global $eyes_cascade;
        global $window_name;
        $faces = [];
        $frame_gray = null;
        $frame_gray = cvtColor($frame, COLOR_BGR2GRAY);
        equalizeHist($frame_gray, $frame_gray);
        //-- Detect faces
        //检测脸部
        $face_cascade->detectMultiScale($frame_gray, $faces, 1.1, 2, 0 | CASCADE_SCALE_IMAGE, new Size(30, 30));
        for ($i = 0; $i < count($faces); $i++) {
            $center = new Point($faces[$i]->x + $faces[$i]->width / 2, $faces[$i]->y + $faces[$i]->height / 2);
            ellipse($frame, $center, new Size($faces[$i]->width / 2, $faces[$i]->height / 2), 0, 0, 360, new Scalar(255, 0, 255), 4, 8, 0);
            $faceROI = $frame_gray->getImageROI($faces[$i]);

            //-- In each face, detect eyes
            //检测眼睛
            $eyes = [];
            $eyes_cascade->detectMultiScale($faceROI, $eyes, 1.1, 2, 0 | CASCADE_SCALE_IMAGE, new Size(30, 30));
            for ($j = 0; $j < count($eyes); $j++) {
                $eye_center = new Point ($faces[$i]->x + $eyes[$j]->x + $eyes[$j]->width / 2, $faces[$i]->y + $eyes[$j]->y + $eyes[$j]->height / 2);
                $radius = round(($eyes[$j]->width + $eyes[$j]->height) * 0.25);
                circle($frame, $eye_center, $radius, new Scalar(255, 0, 0), 4, 8, 0);
            }
        }
        //-- Show what you got
        //屏幕显示视频窗口
        imshow($window_name, $frame);
    }

    function run()
    {
        global $face_cascade;
        global $face_cascade_name;
        global $eyes_cascade;
        global $eyes_cascade_name;
        $capture = new VideoCapture();
        $frame = null;
        //-- 1. Load the cascades
        if (!$face_cascade->load($face_cascade_name)) {
            printf("--(!)Error loading face cascade\n");
            return -1;
        };
        if (!$eyes_cascade->load($eyes_cascade_name)) {
            printf("--(!)Error loading eyes cascade\n");
            return -1;
        };
        //-- 2. Read the video stream
        $capture->open(-1);
        if (!$capture->isOpened()) {
            printf("--(!)Error opening video capture\n");
            return -1;
        }
        while ($capture->read($frame)) {
            if ($frame->empty()) {
                printf(" --(!) No captured frame -- Break!");
                break;
            }
            //-- 3. Apply the classifier to the frame
            detectAndDisplay($frame);
            $frame = null; //如果没有清空内存空间，视频流遍历read的时候帧数越来越多导致内存溢出
            /* waitKey(decay)有两个作用：
     1.等待decay ms，如果此期间有按键按下，则立即结束并返回按下按键的ASCII码，否则返回-1,如果decay为0则无限等待，无返回值
     2.用于处理窗口事件，nameWindow()或者imshow()后面必须加waitkey() */
            $key = waitKey(10);
            if ($key == 27) {
                break;
            } // escape
        }
        return 0;
    }
}
