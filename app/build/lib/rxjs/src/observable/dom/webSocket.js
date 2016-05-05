System.register(['./WebSocketSubject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WebSocketSubject_1;
    var webSocket;
    return {
        setters:[
            function (WebSocketSubject_1_1) {
                WebSocketSubject_1 = WebSocketSubject_1_1;
            }],
        execute: function() {
            exports_1("webSocket", webSocket = WebSocketSubject_1.WebSocketSubject.create);
        }
    }
});
//# sourceMappingURL=webSocket.js.map