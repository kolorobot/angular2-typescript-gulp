System.register(['./TimerObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TimerObservable_1;
    var timer;
    return {
        setters:[
            function (TimerObservable_1_1) {
                TimerObservable_1 = TimerObservable_1_1;
            }],
        execute: function() {
            exports_1("timer", timer = TimerObservable_1.TimerObservable.create);
        }
    }
});
//# sourceMappingURL=timer.js.map