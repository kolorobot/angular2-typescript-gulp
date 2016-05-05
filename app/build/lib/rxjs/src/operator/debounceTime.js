System.register(['../Subscriber', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, async_1;
    var DebounceTimeOperator, DebounceTimeSubscriber;
    /**
     * Returns the source Observable delayed by the computed debounce duration,
     * with the duration lengthened if a new source item arrives before the delay
     * duration ends.
     * In practice, for each item emitted on the source, this operator holds the
     * latest item, waits for a silence for the `dueTime` length, and only then
     * emits the latest source item on the result Observable.
     * Optionally takes a scheduler for manging timers.
     * @param {number} dueTime the timeout value for the window of time required to not drop the item.
     * @param {Scheduler} [scheduler] the Scheduler to use for managing the timers that handle the timeout for each item.
     * @return {Observable} an Observable the same as source Observable, but drops items.
     * @method debounceTime
     * @owner Observable
     */
    function debounceTime(dueTime, scheduler) {
        if (scheduler === void 0) { scheduler = async_1.async; }
        return this.lift(new DebounceTimeOperator(dueTime, scheduler));
    }
    exports_1("debounceTime", debounceTime);
    function dispatchNext(subscriber) {
        subscriber.debouncedNext();
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
            DebounceTimeOperator = (function () {
                function DebounceTimeOperator(dueTime, scheduler) {
                    this.dueTime = dueTime;
                    this.scheduler = scheduler;
                }
                DebounceTimeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
                };
                return DebounceTimeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            DebounceTimeSubscriber = (function (_super) {
                __extends(DebounceTimeSubscriber, _super);
                function DebounceTimeSubscriber(destination, dueTime, scheduler) {
                    _super.call(this, destination);
                    this.dueTime = dueTime;
                    this.scheduler = scheduler;
                    this.debouncedSubscription = null;
                    this.lastValue = null;
                    this.hasValue = false;
                }
                DebounceTimeSubscriber.prototype._next = function (value) {
                    this.clearDebounce();
                    this.lastValue = value;
                    this.hasValue = true;
                    this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
                };
                DebounceTimeSubscriber.prototype._complete = function () {
                    this.debouncedNext();
                    this.destination.complete();
                };
                DebounceTimeSubscriber.prototype.debouncedNext = function () {
                    this.clearDebounce();
                    if (this.hasValue) {
                        this.destination.next(this.lastValue);
                        this.lastValue = null;
                        this.hasValue = false;
                    }
                };
                DebounceTimeSubscriber.prototype.clearDebounce = function () {
                    var debouncedSubscription = this.debouncedSubscription;
                    if (debouncedSubscription !== null) {
                        this.remove(debouncedSubscription);
                        debouncedSubscription.unsubscribe();
                        this.debouncedSubscription = null;
                    }
                };
                return DebounceTimeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});
//# sourceMappingURL=debounceTime.js.map