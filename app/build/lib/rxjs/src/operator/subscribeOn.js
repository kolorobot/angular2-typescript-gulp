System.register(['../observable/SubscribeOnObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SubscribeOnObservable_1;
    /**
     * Asynchronously subscribes Observers to this Observable on the specified Scheduler.
     *
     * <img src="./img/subscribeOn.png" width="100%">
     *
     * @param {Scheduler} the Scheduler to perform subscription actions on.
     * @return {Observable<T>} the source Observable modified so that its subscriptions happen on the specified Scheduler
     .
     * @method subscribeOn
     * @owner Observable
     */
    function subscribeOn(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
    }
    exports_1("subscribeOn", subscribeOn);
    return {
        setters:[
            function (SubscribeOnObservable_1_1) {
                SubscribeOnObservable_1 = SubscribeOnObservable_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=subscribeOn.js.map