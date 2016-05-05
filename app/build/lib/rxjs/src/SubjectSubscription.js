System.register(['./Subscription'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1;
    var SubjectSubscription;
    return {
        setters:[
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SubjectSubscription = (function (_super) {
                __extends(SubjectSubscription, _super);
                function SubjectSubscription(subject, observer) {
                    _super.call(this);
                    this.subject = subject;
                    this.observer = observer;
                    this.isUnsubscribed = false;
                }
                SubjectSubscription.prototype.unsubscribe = function () {
                    if (this.isUnsubscribed) {
                        return;
                    }
                    this.isUnsubscribed = true;
                    var subject = this.subject;
                    var observers = subject.observers;
                    this.subject = null;
                    if (!observers || observers.length === 0 || subject.isUnsubscribed) {
                        return;
                    }
                    var subscriberIndex = observers.indexOf(this.observer);
                    if (subscriberIndex !== -1) {
                        observers.splice(subscriberIndex, 1);
                    }
                };
                return SubjectSubscription;
            }(Subscription_1.Subscription));
            exports_1("SubjectSubscription", SubjectSubscription);
        }
    }
});
//# sourceMappingURL=SubjectSubscription.js.map