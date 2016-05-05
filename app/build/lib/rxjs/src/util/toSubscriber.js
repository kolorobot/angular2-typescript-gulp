System.register(['../Subscriber', '../symbol/rxSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Subscriber_1, rxSubscriber_1;
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver === 'object') {
            if (nextOrObserver instanceof Subscriber_1.Subscriber) {
                return nextOrObserver;
            }
            else if (typeof nextOrObserver[rxSubscriber_1.$$rxSubscriber] === 'function') {
                return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
            }
        }
        return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }
    exports_1("toSubscriber", toSubscriber);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (rxSubscriber_1_1) {
                rxSubscriber_1 = rxSubscriber_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=toSubscriber.js.map