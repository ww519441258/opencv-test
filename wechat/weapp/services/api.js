"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var controllersNeedAccessToken=exports.controllersNeedAccessToken=["user","comment"],loginApiName=exports.loginApiName={weapp:"loginForWeapp",web:"loginForWeb"};exports.default={loginForWeapp:"POST /user/miniprogram-login",loginForWeb:"GET /user/login",home:"GET /infos",user:"GET /user",search:"GET /infos/search",getWechatJsSdk:"GET /infos/jssdk",isRegistered:"GET /user/is-register",getPageLayout:"GET /config/page-layout",uploadImageByMediaId:"POST /comment/media-uploading-picture",getGoodsByStatus:"GET /infos/status"};