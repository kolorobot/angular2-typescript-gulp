System.register(['../util/isNumeric', '../Observable', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isNumeric_1, Observable_1, async_1;
    var IntervalObservable;
    return {
        setters:[
            function (isNumeric_1_1) {
                isNumeric_1 = isNumeric_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            IntervalObservable = (function (_super) {
                __extends(IntervalObservable, _super);
                function IntervalObservable(period, scheduler) {
                    if (period === void 0) { period = 0; }
                    if (scheduler === void 0) { scheduler = async_1.async; }
                    _super.call(this);
                    this.period = period;
                    this.scheduler = scheduler;
                    if (!isNumeric_1.isNumeric(period) || period < 0) {
                        this.period = 0;
                    }
                    if (!scheduler || typeof scheduler.schedule !== 'function') {
                        this.scheduler = async_1.async;
                    }
                }
                /**
                 * Creates an Observable that emits sequential numbers every specified
                 * interval of time, on a specified Scheduler.
                 *
                 * <span class="informal">Emits incremental numbers periodically in time.
                 * </span>
                 *
                 * <img src="./img/interval.png" width="100%">
                 *
                 * `interval` returns an Observable that emits an infinite sequence of
                 * ascending integers, with a constant interval of time of your choosing
                 * between those emissions. The first emission is not sent immediately, but
                 * only after the first period has passed. By default, this operator uses the
                 * `async` Scheduler to provide a notion of time, but you may pass any
                 * Scheduler to it.
                 *
                 * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
                 * var numbers = Rx.Observable.interval(1000);
                 * numbers.subscribe(x => console.log(x));
                 *
                 * @see {@link timer}
                 * @see {@link delay}
                 *
                 * @param {number} [period=0] The interval size in milliseconds (by default)
                 * or the time unit determined by the scheduler's clock.
                 * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
                 * the emission of values, and providing a notion of "time".
                 * @return {Observable} An Observable that emits a sequential number each time
                 * interval.
                 * @static true
                 * @name interval
                 * @owner Observable
                 */
                IntervalObservable.create = function (period, scheduler) {
                    if (period === void 0) { period = 0; }
                    if (scheduler === void 0) { scheduler = async_1.async; }
                    return new IntervalObservable(period, scheduler);
                };
                IntervalObservable.dispatch = function (state) {
                    var index = state.index, subscriber = state.subscriber, period = state.period;
                    subscriber.next(index);
                    if (subscriber.isUnsubscribed) {
                        return;
                    }
                    state.index += 1;
                    this.schedule(state, period);
                };
                IntervalObservable.prototype._subscribe = function (subscriber) {
                    var index = 0;
                    var period = this.period;
                    var scheduler = this.scheduler;
                    subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
                        index: index, subscriber: subscriber, period: period
                    }));
                };
                return IntervalObservable;
            }(Observable_1.Observable));
            exports_1("IntervalObservable", IntervalObservable);
        }
    }
});
//# sourceMappingURL=IntervalObservable.js.map