System.register(['../Observable', '../scheduler/asap', '../util/isNumeric'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, asap_1, isNumeric_1;
    var SubscribeOnObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (asap_1_1) {
                asap_1 = asap_1_1;
            },
            function (isNumeric_1_1) {
                isNumeric_1 = isNumeric_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            SubscribeOnObservable = (function (_super) {
                __extends(SubscribeOnObservable, _super);
                function SubscribeOnObservable(source, delayTime, scheduler) {
                    if (delayTime === void 0) { delayTime = 0; }
                    if (scheduler === void 0) { scheduler = asap_1.asap; }
                    _super.call(this);
                    this.source = source;
                    this.delayTime = delayTime;
                    this.scheduler = scheduler;
                    if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
                        this.delayTime = 0;
                    }
                    if (!scheduler || typeof scheduler.schedule !== 'function') {
                        this.scheduler = asap_1.asap;
                    }
                }
                SubscribeOnObservable.create = function (source, delay, scheduler) {
                    if (delay === void 0) { delay = 0; }
                    if (scheduler === void 0) { scheduler = asap_1.asap; }
                    return new SubscribeOnObservable(source, delay, scheduler);
                };
                SubscribeOnObservable.dispatch = function (arg) {
                    var source = arg.source, subscriber = arg.subscriber;
                    return source.subscribe(subscriber);
                };
                SubscribeOnObservable.prototype._subscribe = function (subscriber) {
                    var delay = this.delayTime;
                    var source = this.source;
                    var scheduler = this.scheduler;
                    return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
                        source: source, subscriber: subscriber
                    });
                };
                return SubscribeOnObservable;
            }(Observable_1.Observable));
            exports_1("SubscribeOnObservable", SubscribeOnObservable);
        }
    }
});
//# sourceMappingURL=SubscribeOnObservable.js.map