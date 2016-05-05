System.register(['./reduce'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var reduce_1;
    /**
     * The Max operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
     * and when source Observable completes it emits a single item: the item with the largest number.
     *
     * <img src="./img/max.png" width="100%">
     *
     * @param {Function} optional comparer function that it will use instead of its default to compare the value of two
     * items.
     * @return {Observable} an Observable that emits item with the largest number.
     * @method max
     * @owner Observable
     */
    function max(comparer) {
        var max = (typeof comparer === 'function')
            ? comparer
            : function (x, y) { return x > y ? x : y; };
        return this.lift(new reduce_1.ReduceOperator(max));
    }
    exports_1("max", max);
    return {
        setters:[
            function (reduce_1_1) {
                reduce_1 = reduce_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=max.js.map