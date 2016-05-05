System.register(['../../../Observable', '../../../observable/dom/webSocket'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, webSocket_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (webSocket_1_1) {
                webSocket_1 = webSocket_1_1;
            }],
        execute: function() {
            Observable_1.Observable.webSocket = webSocket_1.webSocket;
        }
    }
});
//# sourceMappingURL=webSocket.js.map