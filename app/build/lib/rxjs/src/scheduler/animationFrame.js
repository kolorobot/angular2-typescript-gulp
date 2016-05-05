System.register(['./AnimationFrameScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AnimationFrameScheduler_1;
    var animationFrame;
    return {
        setters:[
            function (AnimationFrameScheduler_1_1) {
                AnimationFrameScheduler_1 = AnimationFrameScheduler_1_1;
            }],
        execute: function() {
            exports_1("animationFrame", animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler());
        }
    }
});
//# sourceMappingURL=animationFrame.js.map