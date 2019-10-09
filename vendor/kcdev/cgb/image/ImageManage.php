<?php
/**
 * Created by PhpStorm.
 * User: cgb
 * Date: 2018/5/25
 * Time: 16:26
 */

namespace kcdev\cgb\image;

use Yii;
use yii\base\Component;
use yii\web\Response;
use yii\web\NotFoundHttpException;
use yii\web\HttpException;
class ImageManage extends Component
{
    public $img   = array(
        'jpg','jpeg' ,'png'
    );
    public $video = array (
        'avi','wmv','mpeg',
        'mp4', 'mov','mkv',
        'flv', 'f4v','m4v',
        'rmvb','rm','3gp',
        'dat','ts','mts','vob'
    );

    /**
     * 生成略缩图 请求
     * $path 原图片完整的路径
     * $newpath 生成新图片的完整路径
     * $quality 图片质量
     */
    public function imageMange($path, $newpath, $quality = 75)
    {

        if (file_exists($path)) {
            $pathinfo = pathinfo($path);
            $imagine  = new \Imagine\Imagick\Imagine();
            $dirname  = pathinfo($newpath);
            if (!file_exists($dirname['dirname'])) { //判断前台是否有该文件夹，若无则新建文件夹
                mkdir($dirname['dirname'], 0755, true);
            }
            $imagine->open($path)->save($newpath)->show($pathinfo['extension']);
            die;
        }
        if (!file_exists($newpath)) {  //判断前台是否有该图片文件
            $pathinfo  = pathinfo($path);
            $data      = explode('.', $path);
            $position  = explode('x', $data[1]);
            $width     = $position[0];
            $height    = $position[1];
            $image     = $this->createThumbnail($data[0] . '.' . $pathinfo['extension'], $newpath, $width, $height , $quality);
            if ($image['state']) {
                $image['msg']->show($pathinfo['extension']);
            } else {
                throw new NotFoundHttpException($image['msg']);
            }
        } else {
            throw new NotFoundHttpException('图片加载失败');
        }
    }
    /**
     * 生成略缩图 请求
     * $path 原图片完整的路径
     * $newpath 生成新图片的完整路径
     */
    public function imageMange2($path, $newpath)
    {
        $pathinfo = pathinfo($path);
        $dirname  = $pathinfo['dirname'];
        $basename = $pathinfo['basename'];
        $stuff    = $pathinfo['extension'];
        if (file_exists($path)) {
            $imagine  = new \Imagine\Imagick\Imagine();
            if (!file_exists($dirname)) { //判断前台是否有该文件夹，若无则新建文件夹
                mkdir($dirname, 0755, true);
            }
            $imagine->open($path)->save($newpath)->show($pathinfo['extension']);
            die;
        }
        if (!file_exists($newpath)) {  //判断前台是否有该图片文件
            $len       = strrpos($basename,'.');
            $data      = substr($basename,0,$len);
            $data      = explode('.', $data);
            $k         = count($data);
            if ($k<=1) {
                $width     = 0;
                $height    = 0;
                $file = $dirname.'/'.$basename;
            } else {
                $position  = explode('x', $data[$k-1]);
                isset($position[0]) ? $width  = $position[0]:$width = 0;
                isset($position[1]) ? $height = $position[1]:$height= 0;
                $file      = $dirname.'/'.$data[0] . '.' .$stuff;
            }
//           echo $file;echo $newpath;echo $width;echo $height;
            $image     = $this->createThumbnail($file,$newpath, $width, $height);
            if ($image['state']) {
                $image['msg']->show($pathinfo['extension']);
            } else {
                throw new NotFoundHttpException($image['msg']);
            }
        } else {
            throw new NotFoundHttpException('图片加载失败');
        }
    }
    /**
     * @param $oldImageFile string 原图片路径
     * @param $newImageFile string 生成新图片的路径
     * @param $width integer  略缩图的长度
     * @param $height integer  略缩图的宽度
     * @param $quality integer 默认100，图片质量
     * @return mixed
     */
    public function createThumbnail($oldImageFile,$newImageFile,$width = 0,$height = 0,$quality = 75)
    {
        try {
            $dirname = pathinfo($newImageFile);
            if(!file_exists($oldImageFile)){
                return false;
            }
            if (!file_exists($dirname['dirname'])) { //判断前台是否有该文件夹，若无则新建文件夹
                mkdir($dirname['dirname'],755,true);
            }

            $imagine     = new \Imagine\Imagick\Imagine();
            $mode        = \Imagine\Image\ImageInterface::THUMBNAIL_INSET;
            $imageData   = $imagine->open($oldImageFile);
            $imageHeight = $imageData->getSize()->getHeight();
            $imageWidth  = $imageData->getSize()->getWidth();
            if ($width == 0 && $height == 0) {
                $image['msg'] = $imageData->save($newImageFile,['jpeg_quality' => $quality]);
            } else {
                if ($width > $imageWidth && $height > $imageHeight) {
//              $ratio        = max($width/$imageWidth,$height/$imageHeight);
                    $ratio        = $width/$imageWidth;
                    $size         = new \Imagine\Image\Box($imageWidth*$ratio, $imageHeight*$ratio);
                    $image['msg'] = $imageData->resize($size, \Imagine\Image\ImageInterface::FILTER_LANCZOS)
                        ->save($newImageFile,['jpeg_quality' => $quality]);
                } else{
                    $ratio        = $width/$imageWidth;
                    $size         = new \Imagine\Image\Box($width, $imageHeight*$ratio);
                    $image['msg'] = $imageData->thumbnail($size,$mode)
                        ->save($newImageFile,['jpeg_quality' => $quality]);
                }
            }
            $image['state'] = true;
            return $image;
        } catch (\Imagine\Exception\Exception $e){
            $image['msg']   = $e->getMessage();
            $image['state'] = false;
            return $image;
        }

    }
    /**
     * @param $path     原图片路径
     * @param $newpath  新的图片路径
     * @param int $size 图片压缩时的大小
     * @param $quality  图片质量
     * @return bool
     */
    public function image($path,$newpath,$size = 102400,$quality = 75)
    {
        if (file_exists($path)) {
            if (abs(filesize($path) > $size)) {
                try{
                    $imagine  = new \Imagine\Imagick\Imagine();
                    $dirname  = pathinfo($newpath);
                    if (!file_exists($dirname['dirname'])) { //判断前台是否有该文件夹，若无则新建文件夹
                        mkdir($dirname['dirname'], 0755, true);
                    }
                    $imagine->open($path)->save($newpath,['jpeg_quality' => $quality]);
                    return $newpath;
                } catch (\Imagine\Exception\Exception $e){
                    return $e->getMessage();
                }
            } else {
                $dirname  = pathinfo($newpath);
                if (!file_exists($dirname['dirname'])) { //判断前台是否有该文件夹，若无则新建文件夹
                    mkdir($dirname['dirname'], 0755, true);
                }
                $info = copy($path,$newpath);
                return $info;
            }
           
        }
    }
    
    /**复制视频文件
     * @param $path
     * @param $newpath
     * @throws HttpException
     */
    public function copyFile($path,$newpath,$type) {
        if (file_exists($path)) {
            $pathinfo = pathinfo($path);
            $dirname  = pathinfo($newpath);
            $options  = [];
            if(!isset($type)) {
                $options['mimeType'] = 'video/mp4';
            }
            $res = true;
            if (!file_exists($dirname['dirname'])) { //判断前台是否有该文件夹，若无则新建文件夹
                $res = mkdir($dirname['dirname'], 0755, true);
            }
            if ($res) {
                if (!file_exists($newpath)) {
                    $info = copy($path,$newpath);
                    if ($info) {
                        $this->PutMovie($path,'kc',$options);
                    } else {
                        throw new HttpException('404','文件创建失3');
                    }
                } else {
                    $this->PutMovie($path,'kc',$options);
                }
            } else {
                throw new HttpException('404','文件创建失败4');
            }
        } else {
            throw new HttpException('404','文件不存在');
        }
    }
    
    private function getMimeType($format)
    {
        static $mimeTypes = array(
            'avi' =>'video/avi',
            'wmv' =>'video/x-ms-wmx',
            'mpeg'=>'video/mpg',
            'mp4' =>'video/mpeg4',
            'mov' =>'',
            'mkv' =>'',
            'flv' =>'',
            'f4v' =>'',
            'm4v' =>'',
            'rmvb'=>'application/vnd.rn-realmedia-vbr',
            'rm'  =>'application/vnd.rn-realmedia',
            '3gp' =>'',
            'dat' =>'',
            'ts'  =>'',
            'mts' =>'',
            'vob' =>''
        );

        if (!isset($mimeTypes[$format])) {
//            throw new RuntimeException(sprintf('Unsupported format given. Only %s are supported, %s given', implode(", ", array_keys($mimeTypes)), $format));
         return 'video/mp4';
        }

        return $mimeTypes[$format];
    }
    /**以二进制流读文件，不可以续传
     * @param $file
     * @param string $type
     */
    public function video1($file,$type = 'video/mp4"')
    {
            $response = \Yii::$app->response;
            $response->format = Response::FORMAT_RAW;
            $header =  $response->headers;
            if ($header->has('Content-Type')) {
                $header->set("Content-Type",$type);
            } else {
                $header->set("Content-Type",$type);
            }
            $response->send();
            readfile($file);
    }

    /**以二进制流读文件,可以续传
     * @param $file 文件路径
     * @param string $name 文件自定义的名称
     * @param array $options
     * $opions['fileSize'] 文件内容的字节数
     * $opions['inline'] bool true为用浏览器打开，false为下载到本地
     * $opions['mimeType'] 输出内容的类型
     * @throws NotFoundHttpException
     */
    public function video2($file,$name = '',$options = [])
    {
        ob_clean();
        $response = \Yii::$app->response;
        $fp = fopen($file,'rb');
        if (!$fp) {
            throw new NotFoundHttpException('文件不存在');
        }
        isset($options['fileSize'])?  : $options['fileSize'] = filesize($file);
        isset($options['inline'])  ?  : $options['inline']   = true;//当mineType为浏览器不能播放的内容是inline将失效，文件会被下载，而不是浏览器打开
        isset($options['mimeType'])?  : $options['mimeType'] = 'application/octet-stream';//当mineType为application/octet-stream时文件会被自动下载而不会用浏览器打开
        $response->sendStreamAsFile($fp,$name,$options);
    }
   

    /**输出二进制流，支持断点续传
     * @param string $file 文件路径
     * @param string $type 输出内容类型
     */
    public function video3($file = '',$type = 'video/mp4')
    {
            ob_clean();
            $response = \Yii::$app->response;
            $response->format = Response::FORMAT_RAW;//必须,否则内容将以默认content-type输出，text/html
            $header =  $response->headers;
            if ($header->has('Content-Type')) {
                $header->set("Content-Type",$type);
            } else {
                $header->set("Content-Type",$type);
            }
            $header->set("Accept-Ranges",'bytes');
            $size = filesize($file);
            if(isset($_SERVER['HTTP_RANGE'])) {
                $response->SetstatusCode(206);
                list($name, $range) = explode("=", $_SERVER['HTTP_RANGE']);
                list($begin, $end)  = explode("-", $range);
                if($end == 0 || !$end)  {
                    $end = $size - 1;
                }
            } else {
                $header->set('Content-Range', "bytes */$size");
                $begin = 0; $end = $size - 1;
            }
            $len   = $end-$begin+1;
            $range = "bytes ".$begin-$end/$size;
            $header->set("Content-Length",$len);
            $header->set("Content-Disposition","filename=".basename($file));
            $header->set("Content-Range",$range);
            $response->send();
            $fp = fopen($file, 'rb');
            fseek($fp, $begin);
            while(!feof($fp)) {
                $p = min(1024, $end - $begin + 1);
                $begin += $p;
                echo fread($fp, $p);
                flush();
            }
            fclose($fp);
    }

    public function PutMovie($file,$name = '',$options = []) {

        ob_clean();
        $response = \Yii::$app->response;
        $fp = fopen($file,'rb');
        if (!$fp) {
            throw new HttpException('404','文件不存在');
        }
        isset($options['fileSize'])?  : $options['fileSize'] = filesize($file);
        isset($options['inline'])  ?  : $options['inline']   = true;//当mineType为浏览器不能播放的内容是inline将失效，文件会被下载，而不是浏览器打开
        isset($options['mimeType'])?  : $options['mimeType'] = 'application/octet-stream';//当mineType为application/octet-stream时文件会被自动下载而不会用浏览器打开
        $response->sendStreamAsFile($fp,$name,$options);

    }
    /**
     * @param  $file
     * 原生PHP实现
     * 视频播放2 （可以快进）
     */
    public function GetMp4File($file) 
    {
        ob_clean();
        $size = filesize($file);
        header("Content-type: video/mp4");
        header("Accept-Ranges: bytes");
        header("Connection: Keep-Alive");
        if(isset($_SERVER['HTTP_RANGE'])){
            header("HTTP/1.1 206 Partial Content");//断点续传
            list($name, $range) = explode("=", $_SERVER['HTTP_RANGE']);
            list($begin,$end) = explode("-", $range);
            if($end == 0 || !$end){
                $end = $size - 1;
            }
        }else {
            $begin = 0; $end = $size - 1;
        }
        header("Content-Length: " . ($end - $begin + 1));
        header("Content-Disposition: filename=".basename($file));
        header("Content-Range: bytes ".$begin."-".$end."/".$size);
        $fp = fopen($file, 'rb');
        if (!$fp) {
            throwException('文件不存在');
        }
        fseek($fp, $begin);
        while(!feof($fp)) {
            $p = min(1024, $end - $begin + 1);
            $begin += $p;
            echo fread($fp, $p);
        }
        fclose($fp);
    }
    /**
     * @param $rootFile string //原图路径
     * @param $waterFile //水印图路径
     * @param int $position 1=lt,2=lb,3=rt,4=rb;l=left,r=right,t=top,b=bottom
     * @param $overRide boolean 是否覆盖原图
     * @return mixed
     */
    public function addWater($rootFile,$waterFile,$position=4,$overRide=false)
    {
        try {
            $pathinfo = pathinfo($rootFile);
            if (!$overRide) {
                $filename =  basename($rootFile,$pathinfo['extension']);
                $suffix   =  $pathinfo['extension'];
                $param    =  'w.'.$position.'.';
                $water_rootfile = $pathinfo['dirname'].'/'.$filename.$param.$suffix;
            } else {
                $water_rootfile = $rootFile;
            }
            $imagine   = new \Imagine\Imagick\Imagine();
            $watermark = $imagine->open($waterFile);
            $image     = $imagine->open($rootFile);
            $size      = $image->getSize();
            $wSize     = $watermark->getSize();
            $position  > 2 ? $pwidth=$size->getWidth()-$wSize->getWidth() : $pwidth=0;
            $position  % 2 == 0 ? $pheight=$size->getHeight()-$wSize->getHeight() : $pheight=0;
            $point = new \Imagine\Image\Point($pwidth,$pheight);
            $data['msg']   = $image->paste($watermark, $point)->save($water_rootfile);
            $data['state'] = true;
            return $data;
        } catch (\Imagine\Exception\Exception $e) {
            $data['msg']   = $e->getMessage();
            $data['state'] = false;
            return $data;
        }

    }

    /**
     * 加水印
     */
    public function imageWater()
    {

        if (Yii::$app->request->isGet) {
            $imgpath = Yii::getAlias('@img');
            $path = $imgpath . '/page.600x600.png';
            $waterfile = $imgpath . '/logo.png';
            $info = $this->addWater($path, $waterfile, 2);
            if ($info['state']) {
                $info['msg']->show('jpg');
            } else {
                print_r($info['msg']);
            }
        }
    }


}