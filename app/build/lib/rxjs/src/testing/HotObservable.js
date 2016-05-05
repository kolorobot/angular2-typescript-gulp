System.register(['../Subject', '../Subscription', './SubscriptionLoggable', '../util/applyMixins'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1, Subscription_1, SubscriptionLoggable_1, applyMixins_1;
    var HotObservable;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
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
            HotObservable = (function (_super) {
                __extends(HotObservable, _super);
                function HotObservable(messages, scheduler) {
                    _super.call(this);
                    this.messages = messages;
                    this.subscriptions = [];
                    this.scheduler = scheduler;
                }
                HotObservable.prototype._subscribe = function (subscriber) {
                    var subject = this;
                    var index = subject.logSubscribedFrame();
                    subscriber.add(new Subscription_1.Subscription(function () {
                        subject.logUnsubscribedFrame(index);
                    }));
                    return _super.prototype._subscribe.call(this, subscriber);
                };
                HotObservable.prototype.setup = function () {
                    var subject = this;
                    var messagesLength = subject.messages.length;
                    /* tslint:disable:no-var-keyword */
                    for (var i = 0; i < messagesLength; i++) {
                        (function () {
                            var message = subject.messages[i];
                            /* tslint:enable */
                            subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
                        })();
                    }
                };
                return HotObservable;
            }(Subject_1.Subject));
            exports_1("HotObservable", HotObservable);
            applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
        }
    }
});
//# sourceMappingURL=HotObservable.js.map