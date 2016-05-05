System.register(['../Observable', '../Subscription', './SubscriptionLoggable', '../util/applyMixins'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, Subscription_1, SubscriptionLoggable_1, applyMixins_1;
    var ColdObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            },
            function (SubscriptionLoggable_1_1) {
                SubscriptionLoggable_1 = SubscriptionLoggable_1_1;
            },
            function (applyMixins_1_1) {
                applyMixins_1 = applyMixins_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ColdObservable = (function (_super) {
                __extends(ColdObservable, _super);
                function ColdObservable(messages, scheduler) {
                    _super.call(this, function (subscriber) {
                        var observable = this;
                        var index = observable.logSubscribedFrame();
                        subscriber.add(new Subscription_1.Subscription(function () {
                            observable.logUnsubscribedFrame(index);
                        }));
                        observable.scheduleMessages(subscriber);
                        return subscriber;
                    });
                    this.messages = messages;
                    this.subscriptions = [];
                    this.scheduler = scheduler;
                }
                ColdObservable.prototype.scheduleMessages = function (subscriber) {
                    var messagesLength = this.messages.length;
                    for (var i = 0; i < messagesLength; i++) {
                        var message = this.messages[i];
                        subscriber.add(this.scheduler.schedule(function (_a) {
                            var message = _a.message, subscriber = _a.subscriber;
                            message.notification.observe(subscriber);
                        }, message.frame, { message: message, subscriber: subscriber }));
                    }
                };
                return ColdObservable;
            }(Observable_1.Observable));
            exports_1("ColdObservable", ColdObservable);
            applyMixins_1.applyMixins(ColdObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
        }
    }
});
//# sourceMappingURL=ColdObservable.js.map