/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : kcshop

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-07-18 17:03:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for kcs_config
-- ----------------------------
DROP TABLE IF EXISTS `kcs_config`;
CREATE TABLE `kcs_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `stock_warn` int(10) DEFAULT '1' COMMENT '库存警告',
  `auto_confirm_receive` int(10) DEFAULT '7' COMMENT '自动确认收货时间（单位：天）',
  `auto_cancel_time` int(10) DEFAULT '24' COMMENT '未付款订单自动过期时间（单位为小时）',
  `sku_type` int(1) DEFAULT '1' COMMENT 'sku 类型',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of kcs_config
-- ----------------------------
INSERT INTO `kcs_config` VALUES ('1', 'Kcshop', '1', '15', '24', '2');
