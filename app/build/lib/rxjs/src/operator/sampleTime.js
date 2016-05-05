System.register(['../Subscriber', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, async_1;
    var SampleTimeOperator, SampleTimeSubscriber;
    /**
     * @param delay
     * @param scheduler
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method sampleTime
     * @owner Observable
     */
    function sampleTime(delay, scheduler) {
        if (scheduler === void 0) { scheduler = async_1.async; }
        return this.lift(new SampleTimeOperator(delay, scheduler));
    }
    exports_1("sampleTime", sampleTime);
    function dispatchNotification(state) {
        var subscriber = state.subscriber, delay = state.delay;
        subscriber.notifyNext();
        this.schedule(state, delay);
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
            SampleTimeOperator = (function () {
                function SampleTimeOperator(delay, scheduler) {
                    this.delay = delay;
                    this.scheduler = scheduler;
                }
                SampleTimeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new SampleTimeSubscriber(subscriber, this.delay, this.scheduler));
                };
                return SampleTimeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SampleTimeSubscriber = (function (_super) {
                __extends(SampleTimeSubscriber, _super);
                function SampleTimeSubscriber(destination, delay, scheduler) {
                    _super.call(this, destination);
                    this.delay = delay;
                    this.scheduler = scheduler;
                    this.hasValue = false;
                    this.add(scheduler.schedule(dispatchNotification, delay, { subscriber: this, delay: delay }));
                }
                SampleTimeSubscriber.prototype._next = function (value) {
                    this.lastValue = value;
                    this.hasValue = true;
                };
                SampleTimeSubscriber.prototype.notifyNext = function () {
                    if (this.hasValue) {
                        this.hasValue = false;
                        this.destination.next(this.lastValue);
                    }
                };
                return SampleTimeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});
//# sourceMappingURL=sampleTime.js.map