System.register(['../Subscriber', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, async_1;
    var ThrottleTimeOperator, ThrottleTimeSubscriber;
    /**
     * @param delay
     * @param scheduler
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method throttleTime
     * @owner Observable
     */
    function throttleTime(delay, scheduler) {
        if (scheduler === void 0) { scheduler = async_1.async; }
        return this.lift(new ThrottleTimeOperator(delay, scheduler));
    }
    exports_1("throttleTime", throttleTime);
    function dispatchNext(arg) {
        var subscriber = arg.subscriber;
        subscriber.clearThrottle();
    }
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            ThrottleTimeOperator = (function () {
                function ThrottleTimeOperator(delay, scheduler) {
                    this.delay = delay;
                    this.scheduler = scheduler;
                }
                ThrottleTimeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ThrottleTimeSubscriber(subscriber, this.delay, this.scheduler));
                };
                return ThrottleTimeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ThrottleTimeSubscriber = (function (_super) {
                __extends(ThrottleTimeSubscriber, _super);
                function ThrottleTimeSubscriber(destination, delay, scheduler) {
                    _super.call(this, destination);
                    this.delay = delay;
                    this.scheduler = scheduler;
                }
                ThrottleTimeSubscriber.prototype._next = function (value) {
                    if (!this.throttled) {
                        this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, { subscriber: this }));
                        this.destination.next(value);
                    }
                };
                ThrottleTimeSubscriber.prototype.clearThrottle = function () {
                    var throttled = this.throttled;
                    if (throttled) {
                        throttled.unsubscribe();
                        this.remove(throttled);
                        this.throttled = null;
                    }
                };
                return ThrottleTimeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});
//# sourceMappingURL=throttleTime.js.map