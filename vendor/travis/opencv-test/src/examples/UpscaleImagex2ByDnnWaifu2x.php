<?php

namespace travis\opencvtest\examples;

use Yii;
use CV\Scalar;
use function CV\{imread, imwrite, cvtColor};

class UpscaleImagex2ByDnnWaifu2x
{
    public $source;

    public function run()
    {
        $src = imread($this->source); // opencv loads image to matrix with BGR order
        $src = cvtColor($src, \CV\COLOR_BGR2RGB); // convert BGR to RGB
        \CV\copyMakeBorder($src, $src, 7, 7, 7, 7, 1); // add borders 7px
        //var_export($src);

        $blob = \CV\DNN\blobFromImage($src, 1, $src->size(), new Scalar()); // convert image to 4 dimensions matrix
        //var_export($blob);
        $blob = $blob->divide(255); // convert color values from 0-255 to 0-1

        $net = \CV\DNN\readNetFromCaffe(__DIR__.'/../models/waifu2x/scale2.0x_model.prototxt', __DIR__.'/../models/waifu2x/scale2.0x_model.caffemodel');
        $net->setInput($blob, "");
        
        $r = $net->forward();

        $r = $r->divide(1/255); // convert color values from 0-255 to 0-1
        //var_export($r);

        $mat = new \CV\Mat($r->shape[2], $r->shape[3], CV\CV_32FC3);

        for ($i = 0; $i < $r->shape[2]; $i++) {
            for ($j = 0; $j < $r->shape[3]; $j++) {
                $mat->at($i, $j, 0, $r->atIdx([0,0,$i,$j])); //R
                $mat->at($i, $j, 1, $r->atIdx([0,1,$i,$j])); //G
                $mat->at($i, $j, 2, $r->atIdx([0,2,$i,$j])); //B
            }
        }

        $path = Yii::getAlias('@vendor') . '/travis/opencv-test/src/result/';
        if (!is_dir($path)) {
            mkdir($path, 0777);
        }

        $savePath = $path.'_upscale_image_x2_by_dnn_waifu2x.png';
        imwrite($savePath, $mat);
    }
}

