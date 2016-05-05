System.register(['../util/isNumeric', '../Observable', '../scheduler/async', '../util/isScheduler', '../util/isDate'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isNumeric_1, Observable_1, async_1, isScheduler_1, isDate_1;
    var TimerObservable;
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
            },
            function (isScheduler_1_1) {
                isScheduler_1 = isScheduler_1_1;
            },
            function (isDate_1_1) {
                isDate_1 = isDate_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            TimerObservable = (function (_super) {
                __extends(TimerObservable, _super);
                function TimerObservable(dueTime, period, scheduler) {
                    if (dueTime === void 0) { dueTime = 0; }
                    _super.call(this);
                    this.period = -1;
                    this.dueTime = 0;
                    if (isNumeric_1.isNumeric(period)) {
                        this.period = Number(period) < 1 && 1 || Number(period);
                    }
                    else if (isScheduler_1.isScheduler(period)) {
                        scheduler = period;
                    }
                    if (!isScheduler_1.isScheduler(scheduler)) {
                        scheduler = async_1.async;
                    }
                    this.scheduler = scheduler;
                    this.dueTime = isDate_1.isDate(dueTime) ?
                        (+dueTime - this.scheduler.now()) :
                        dueTime;
                }
                /**
                 * Creates an Observable that starts emitting after an `initialDelay` and
                 * emits ever increasing numbers after each `period` of time thereafter.
                 *
                 * <span class="informal">Its like {@link interval}, but you can specify when
                 * should the emissions start.</span>
                 *
                 * <img src="./img/timer.png" width="100%">
                 *
                 * `timer` returns an Observable that emits an infinite sequence of ascending
                 * integers, with a constant interval of time, `period` of your choosing
                 * between those emissions. The first emission happens after the specified
                 * `initialDelay`. The initial delay may be a {@link Date}. By default, this
                 * operator uses the `async` Scheduler to provide a notion of time, but you
                 * may pass any Scheduler to it. If `period` is not specified, the output
                 * Observable emits only one value, `0`. Otherwise, it emits an infinite
                 * sequence.
                 *
                 * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
                 * var numbers = Rx.Observable.timer(3000, 1000);
                 * numbers.subscribe(x => console.log(x));
                 *
                 * @example <caption>Emits one number after five seconds</caption>
                 * var numbers = Rx.Observable.timer(5000);
                 * numbers.subscribe(x => console.log(x));
                 *
                 * @see {@link interval}
                 * @see {@link delay}
                 *
                 * @param {number|Date} initialDelay The initial delay time to wait before
                 * emitting the first value of `0`.
                 * @param {number} [period] The period of time between emissions of the
                 * subsequent numbers.
                 * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
                 * the emission of values, and providing a notion of "time".
                 * @return {Observable} An Observable that emits a `0` after the
                 * `initialDelay` and ever increasing numbers after each `period` of time
                 * thereafter.
                 * @static true
                 * @name timer
                 * @owner Observable
                 */
                TimerObservable.create = function (initialDelay, period, scheduler) {
                    if (initialDelay === void 0) { initialDelay = 0; }
                    return new TimerObservable(initialDelay, period, scheduler);
                };
                TimerObservable.dispatch = function (state) {
                    var index = state.index, period = state.period, subscriber = state.subscriber;
                    var action = this;
                    subscriber.next(index);
                    if (subscriber.isUnsubscribed) {
                        return;
                    }
                    else if (period === -1) {
                        return subscriber.complete();
                    }
                    state.index = index + 1;
                    action.schedule(state, period);
                };
                TimerObservable.prototype._subscribe = function (subscriber) {
                    var index = 0;
                    var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
                    return scheduler.schedule(TimerObservable.dispatch, dueTime, {
                        index: index, period: period, subscriber: subscriber
                    });
                };
                return TimerObservable;
            }(Observable_1.Observable));
            exports_1("TimerObservable", TimerObservable);
        }
    }
});
//# sourceMappingURL=TimerObservable.js.map