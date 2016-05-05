System.register(['../Observable', '../util/subscribeToResult', '../OuterSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, subscribeToResult_1, OuterSubscriber_1;
    var UsingObservable, UsingSubscriber;
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
            UsingObservable = (function (_super) {
                __extends(UsingObservable, _super);
                function UsingObservable(resourceFactory, observableFactory) {
                    _super.call(this);
                    this.resourceFactory = resourceFactory;
                    this.observableFactory = observableFactory;
                }
                UsingObservable.create = function (resourceFactory, observableFactory) {
                    return new UsingObservable(resourceFactory, observableFactory);
                };
                UsingObservable.prototype._subscribe = function (subscriber) {
                    var _a = this, resourceFactory = _a.resourceFactory, observableFactory = _a.observableFactory;
                    var resource;
                    try {
                        resource = resourceFactory();
                        return new UsingSubscriber(subscriber, resource, observableFactory);
                    }
                    catch (err) {
                        subscriber.error(err);
                    }
                };
                return UsingObservable;
            }(Observable_1.Observable));
            exports_1("UsingObservable", UsingObservable);
            UsingSubscriber = (function (_super) {
                __extends(UsingSubscriber, _super);
                function UsingSubscriber(destination, resource, observableFactory) {
                    _super.call(this, destination);
                    this.resource = resource;
                    this.observableFactory = observableFactory;
                    destination.add(resource);
                    this.tryUse();
                }
                UsingSubscriber.prototype.tryUse = function () {
                    try {
                        var source = this.observableFactory.call(this, this.resource);
                        if (source) {
                            this.add(subscribeToResult_1.subscribeToResult(this, source));
                        }
                    }
                    catch (err) {
                        this._error(err);
                    }
                };
                return UsingSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});
//# sourceMappingURL=UsingObservable.js.map