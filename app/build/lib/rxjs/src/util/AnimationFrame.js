System.register(['./root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1;
    var RequestAnimationFrameDefinition, AnimationFrame;
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            }],
        execute: function() {
            RequestAnimationFrameDefinition = (function () {
                function RequestAnimationFrameDefinition(root) {
                    if (root.requestAnimationFrame) {
                        this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
                        this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
                    }
                    else if (root.mozRequestAnimationFrame) {
                        this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
                        this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
                    }
                    else if (root.webkitRequestAnimationFrame) {
                        this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
                        this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
                    }
                    else if (root.msRequestAnimationFrame) {
                        this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
                        this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
                    }
                    else if (root.oRequestAnimationFrame) {
                        this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
                        this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
                    }
                    else {
                        this.cancelAnimationFrame = root.clearTimeout.bind(root);
                        this.requestAnimationFrame = function (cb) { return root.setTimeout(cb, 1000 / 60); };
                    }
                }
                return RequestAnimationFrameDefinition;
            }());
            exports_1("RequestAnimationFrameDefinition", RequestAnimationFrameDefinition);
            exports_1("AnimationFrame", AnimationFrame = new RequestAnimationFrameDefinition(root_1.root));
        }
    }
});
//# sourceMappingURL=AnimationFrame.js.map