import { useRef, useCallback, useState } from 'react';
export var useFlash = function (initialValue, options) {
    var _a = (options || {}).duration, duration = _a === void 0 ? 1000 : _a;
    var _b = useState(initialValue), state = _b[0], setState = _b[1];
    var timeout = useRef();
    var flash = useCallback(function (props) {
        setState(props);
        timeout.current = setTimeout(function () {
            setState(initialValue);
        }, duration);
    }, [state]);
    return [state, flash];
};
