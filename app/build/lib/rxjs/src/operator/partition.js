System.register(['../util/not', './filter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var not_1, filter_1;
    /**
     * @param predicate
     * @param thisArg
     * @return {Observable<T>[]}
     * @method partition
     * @owner Observable
     */
    function partition(predicate, thisArg) {
        return [
            filter_1.filter.call(this, predicate),
            filter_1.filter.call(this, not_1.not(predicate, thisArg))
        ];
    }
    exports_1("partition", partition);
    return {
        setters:[
            function (not_1_1) {
                not_1 = not_1_1;
            },
            function (filter_1_1) {
                filter_1 = filter_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=partition.js.map