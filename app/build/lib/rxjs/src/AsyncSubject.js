System.register(['./Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1;
    var AsyncSubject;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            /**
             * @class AsyncSubject<T>
             */
            AsyncSubject = (function (_super) {
                __extends(AsyncSubject, _super);
                function AsyncSubject() {
                    _super.apply(this, arguments);
                    this.value = null;
                    this.hasNext = false;
                }
                AsyncSubject.prototype._subscribe = function (subscriber) {
                    if (this.hasCompleted && this.hasNext) {
                        subscriber.next(this.value);
                    }
                    return _super.prototype._subscribe.call(this, subscriber);
                };
                AsyncSubject.prototype._next = function (value) {
                    this.value = value;
                    this.hasNext = true;
                };
                AsyncSubject.prototype._complete = function () {
                    var index = -1;
                    var observers = this.observers;
                    var len = observers.length;
                    // optimization to block our SubjectSubscriptions from
                    // splicing themselves out of the observers list one by one.
                    this.isUnsubscribed = true;
                    if (this.hasNext) {
                        while (++index < len) {
                            var o = observers[index];
                            o.next(this.value);
                            o.complete();
                        }
                    }
                    else {
                        while (++index < len) {
                            observers[index].complete();
                        }
                    }
                    this.isUnsubscribed = false;
                    this.unsubscribe();
                };
                return AsyncSubject;
            }(Subject_1.Subject));
            exports_1("AsyncSubject", AsyncSubject);
        }
    }
});
//# sourceMappingURL=AsyncSubject.js.map