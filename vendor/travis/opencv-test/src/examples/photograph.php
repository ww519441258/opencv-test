<?php
use CV\VideoCapture;
use function CV\ {
    waitKey, imshow, imwrite,destroyWindow, imread
};


//$im = imread('images/cat.jpg');//加载图片
//imshow('This is Obama id card',$im);//调用imshow方法暂时图片
//waitKey(0);

$capture = new VideoCapture();//创建视频对象
$capture->open(0);//打开电脑一个摄像头
if (!$capture->isOpened()) {
    exit('打开摄像头失败');
}
$frame = null;
$number = 1;
while (true) {
    $capture->read($frame);//把当前摄像头的图像捕捉并保存到$frame变量当中
    imshow("frame", $frame);//暂时摄像头捕捉到的图像
    $key = waitKey(50);//等待用户输入

//    $myPicsPath = realpath('./myPics');//保存拍摄自己人脸的路径
    $myPicsPath = __DIR__.'/myPics';//保存拍摄自己人脸的路径
    if (!is_dir($myPicsPath)) {
        mkdir($myPicsPath, 0777);
    }

    $filename = $myPicsPath . '/pic' . $number . '.jpg';//保存图像名称
    if ($key != -1) {
        $key = chr($key);
    }

    switch ($key) {
        case'p'://当用户键入'p'则拍照
            $number++;
            imwrite($filename, $frame);//保存图像
            imshow("photo", $frame);
            waitKey(500);
            destroyWindow("photo");
            break;
        case 's'://当用户键入's'，跳出循环
            break 2;
        default:
            break;
    }
}