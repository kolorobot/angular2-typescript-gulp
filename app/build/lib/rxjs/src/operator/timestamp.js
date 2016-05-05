System.register(['../Subscriber', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, async_1;
    var Timestamp, TimestampOperator, TimestampSubscriber;
    /**
     * @param scheduler
     * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
     * @method timestamp
     * @owner Observable
     */
    function timestamp(scheduler) {
        if (scheduler === void 0) { scheduler = async_1.async; }
        return this.lift(new TimestampOperator(scheduler));
    }
    exports_1("timestamp", timestamp);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            Timestamp = (function () {
                function Timestamp(value, timestamp) {
                    this.value = value;
                    this.timestamp = timestamp;
                }
                return Timestamp;
            }());
            exports_1("Timestamp", Timestamp);
            ;
            TimestampOperator = (function () {
                function TimestampOperator(scheduler) {
                    this.scheduler = scheduler;
                }
                TimestampOperator.prototype.call = function (observer, source) {
                    return source._subscribe(new TimestampSubscriber(observer, this.scheduler));
                };
                return TimestampOperator;
            }());
            TimestampSubscriber = (function (_super) {
                __extends(TimestampSubscriber, _super);
                function TimestampSubscriber(destination, scheduler) {
                    _super.call(this, destination);
                    this.scheduler = scheduler;
                }
                TimestampSubscriber.prototype._next = function (value) {
                    var now = this.scheduler.now();
                    this.destination.next(new Timestamp(value, now));
                };
                return TimestampSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});
//# sourceMappingURL=timestamp.js.map