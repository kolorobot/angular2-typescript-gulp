System.register(['../Observable', '../util/subscribeToResult', '../OuterSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, subscribeToResult_1, OuterSubscriber_1;
    var IfObservable, IfSubscriber;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            IfObservable = (function (_super) {
                __extends(IfObservable, _super);
                function IfObservable(condition, thenSource, elseSource) {
                    _super.call(this);
                    this.condition = condition;
                    this.thenSource = thenSource;
                    this.elseSource = elseSource;
                }
                IfObservable.create = function (condition, thenSource, elseSource) {
                    return new IfObservable(condition, thenSource, elseSource);
                };
                IfObservable.prototype._subscribe = function (subscriber) {
                    var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
                    return new IfSubscriber(subscriber, condition, thenSource, elseSource);
                };
                return IfObservable;
            }(Observable_1.Observable));
            exports_1("IfObservable", IfObservable);
            IfSubscriber = (function (_super) {
                __extends(IfSubscriber, _super);
                function IfSubscriber(destination, condition, thenSource, elseSource) {
                    _super.call(this, destination);
                    this.condition = condition;
                    this.thenSource = thenSource;
                    this.elseSource = elseSource;
                    this.tryIf();
                }
                IfSubscriber.prototype.tryIf = function () {
                    var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
                    var result;
                    try {
                        result = condition();
                        var source = result ? thenSource : elseSource;
                        if (source) {
                            this.add(subscribeToResult_1.subscribeToResult(this, source));
                        }
                        else {
                            this._complete();
                        }
                    }
                    catch (err) {
                        this._error(err);
                    }
                };
                return IfSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});
//# sourceMappingURL=IfObservable.js.map