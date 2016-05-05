System.register(['./AjaxObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AjaxObservable_1;
    var ajax;
    return {
        setters:[
            function (AjaxObservable_1_1) {
                AjaxObservable_1 = AjaxObservable_1_1;
            }],
        execute: function() {
            exports_1("ajax", ajax = AjaxObservable_1.AjaxObservable.create);
        }
    }
});
//# sourceMappingURL=ajax.js.map