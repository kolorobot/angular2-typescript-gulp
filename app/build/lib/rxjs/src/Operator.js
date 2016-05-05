System.register(['./Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Subscriber_1;
    var Operator;
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            Operator = (function () {
                function Operator() {
                }
                Operator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new Subscriber_1.Subscriber(subscriber));
                };
                return Operator;
            }());
            exports_1("Operator", Operator);
        }
    }
});
//# sourceMappingURL=Operator.js.map