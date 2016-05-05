System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var ThrottleOperator, ThrottleSubscriber;
    /**
     * @param durationSelector
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method throttle
     * @owner Observable
     */
    function throttle(durationSelector) {
        return this.lift(new ThrottleOperator(durationSelector));
    }
    exports_1("throttle", throttle);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            ThrottleOperator = (function () {
                function ThrottleOperator(durationSelector) {
                    this.durationSelector = durationSelector;
                }
                ThrottleOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ThrottleSubscriber(subscriber, this.durationSelector));
                };
                return ThrottleOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ThrottleSubscriber = (function (_super) {
                __extends(ThrottleSubscriber, _super);
                function ThrottleSubscriber(destination, durationSelector) {
                    _super.call(this, destination);
                    this.destination = destination;
                    this.durationSelector = durationSelector;
                }
                ThrottleSubscriber.prototype._next = function (value) {
                    if (!this.throttled) {
                        this.tryDurationSelector(value);
                    }
                };
                ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
                    var duration = null;
                    try {
                        duration = this.durationSelector(value);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    this.emitAndThrottle(value, duration);
                };
                ThrottleSubscriber.prototype.emitAndThrottle = function (value, duration) {
                    this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
                    this.destination.next(value);
                };
                ThrottleSubscriber.prototype._unsubscribe = function () {
                    var throttled = this.throttled;
                    if (throttled) {
                        this.remove(throttled);
                        this.throttled = null;
                        throttled.unsubscribe();
                    }
                };
                ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this._unsubscribe();
                };
                ThrottleSubscriber.prototype.notifyComplete = function () {
                    this._unsubscribe();
                };
                return ThrottleSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});
//# sourceMappingURL=throttle.js.map