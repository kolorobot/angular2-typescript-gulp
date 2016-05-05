System.register(['../../../Observable', '../../../observable/dom/ajax'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, ajax_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (ajax_1_1) {
                ajax_1 = ajax_1_1;
            }],
        execute: function() {
            Observable_1.Observable.ajax = ajax_1.ajax;
        }
    }
});
//# sourceMappingURL=ajax.js.map