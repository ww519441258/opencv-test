"use strict";exports.__esModule=!0,exports.throttleHelper=exports.takeLatestHelper=exports.takeEveryHelper=exports.throttle=exports.takeLatest=exports.takeEvery=void 0;var _takeEvery=require("./takeEvery.js"),_takeEvery2=_interopRequireDefault(_takeEvery),_takeLatest=require("./takeLatest.js"),_takeLatest2=_interopRequireDefault(_takeLatest),_throttle=require("./throttle.js"),_throttle2=_interopRequireDefault(_throttle),_utils=require("../utils.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var deprecationWarning=function(e){return"import { "+e+" } from 'redux-saga' has been deprecated in favor of import { "+e+" } from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield "+e+" will return task descriptor to your saga and execute next lines of code."},takeEvery=(0,_utils.deprecate)(_takeEvery2.default,deprecationWarning("takeEvery")),takeLatest=(0,_utils.deprecate)(_takeLatest2.default,deprecationWarning("takeLatest")),throttle=(0,_utils.deprecate)(_throttle2.default,deprecationWarning("throttle"));exports.takeEvery=takeEvery,exports.takeLatest=takeLatest,exports.throttle=throttle,exports.takeEveryHelper=_takeEvery2.default,exports.takeLatestHelper=_takeLatest2.default,exports.throttleHelper=_throttle2.default;