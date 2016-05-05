System.register(['../ReplaySubject', './multicast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ReplaySubject_1, multicast_1;
    /**
     * @param bufferSize
     * @param windowTime
     * @param scheduler
     * @return {ConnectableObservable<T>}
     * @method publishReplay
     * @owner Observable
     */
    function publishReplay(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
    }
    exports_1("publishReplay", publishReplay);
    return {
        setters:[
            function (ReplaySubject_1_1) {
                ReplaySubject_1 = ReplaySubject_1_1;
            },
            function (multicast_1_1) {
                multicast_1 = multicast_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=publishReplay.js.map