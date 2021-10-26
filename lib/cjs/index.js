"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFlash = void 0;
var react_1 = require("react");
var useFlash = function (initialValue, options) {
    var _a = (options || {}).duration, duration = _a === void 0 ? 1000 : _a;
    var _b = (0, react_1.useState)(initialValue), state = _b[0], setState = _b[1];
    var timeout = (0, react_1.useRef)();
    var flash = (0, react_1.useCallback)(function (props) {
        setState(props);
        timeout.current = setTimeout(function () {
            setState(initialValue);
        }, duration);
    }, [state]);
    return [state, flash];
};
exports.useFlash = useFlash;
