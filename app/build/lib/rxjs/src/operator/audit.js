System.register(['../util/tryCatch', '../util/errorObject', '../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var tryCatch_1, errorObject_1, OuterSubscriber_1, subscribeToResult_1;
    var AuditOperator, AuditSubscriber;
    /**
     * @param durationSelector
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method audit
     * @owner Observable
     */
    function audit(durationSelector) {
        return this.lift(new AuditOperator(durationSelector));
    }
    exports_1("audit", audit);
    return {
        setters:[
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            AuditOperator = (function () {
                function AuditOperator(durationSelector) {
                    this.durationSelector = durationSelector;
                }
                AuditOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new AuditSubscriber(subscriber, this.durationSelector));
                };
                return AuditOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            AuditSubscriber = (function (_super) {
                __extends(AuditSubscriber, _super);
                function AuditSubscriber(destination, durationSelector) {
                    _super.call(this, destination);
                    this.durationSelector = durationSelector;
                    this.hasValue = false;
                }
                AuditSubscriber.prototype._next = function (value) {
                    this.value = value;
                    this.hasValue = true;
                    if (!this.throttled) {
                        var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
                        if (duration === errorObject_1.errorObject) {
                            this.destination.error(errorObject_1.errorObject.e);
                        }
                        else {
                            this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
                        }
                    }
                };
                AuditSubscriber.prototype.clearThrottle = function () {
                    var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
                    if (throttled) {
                        this.remove(throttled);
                        this.throttled = null;
                        throttled.unsubscribe();
                    }
                    if (hasValue) {
                        this.value = null;
                        this.hasValue = false;
                        this.destination.next(value);
                    }
                };
                AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
                    this.clearThrottle();
                };
                AuditSubscriber.prototype.notifyComplete = function () {
                    this.clearThrottle();
                };
                return AuditSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});
//# sourceMappingURL=audit.js.map