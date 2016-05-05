System.register(['./Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var OuterSubscriber;
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            OuterSubscriber = (function (_super) {
                __extends(OuterSubscriber, _super);
                function OuterSubscriber() {
                    _super.apply(this, arguments);
                }
                OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.destination.next(innerValue);
                };
                OuterSubscriber.prototype.notifyError = function (error, innerSub) {
                    this.destination.error(error);
                };
                OuterSubscriber.prototype.notifyComplete = function (innerSub) {
                    this.destination.complete();
                };
                return OuterSubscriber;
            }(Subscriber_1.Subscriber));
            exports_1("OuterSubscriber", OuterSubscriber);
        }
    }
});
//# sourceMappingURL=OuterSubscriber.js.map