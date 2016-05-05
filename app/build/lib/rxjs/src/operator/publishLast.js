System.register(['../AsyncSubject', './multicast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AsyncSubject_1, multicast_1;
    /**
     * @return {ConnectableObservable<T>}
     * @method publishLast
     * @owner Observable
     */
    function publishLast() {
        return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
    }
    exports_1("publishLast", publishLast);
    return {
        setters:[
            function (AsyncSubject_1_1) {
                AsyncSubject_1 = AsyncSubject_1_1;
            },
            function (multicast_1_1) {
                multicast_1 = multicast_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=publishLast.js.map