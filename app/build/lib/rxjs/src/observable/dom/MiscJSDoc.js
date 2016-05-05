System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AjaxRequestDoc;
    return {
        setters:[],
        execute: function() {
            /**
             * @see {@link ajax}
             *
             * @interface
             * @name AjaxRequest
             * @noimport true
             */
            AjaxRequestDoc = (function () {
                function AjaxRequestDoc() {
                    /**
                     * @type {string}
                     */
                    this.url = '';
                    /**
                     * @type {number}
                     */
                    this.body = 0;
                    /**
                     * @type {string}
                     */
                    this.user = '';
                    /**
                     * @type {boolean}
                     */
                    this.async = false;
                    /**
                     * @type {string}
                     */
                    this.method = '';
                    /**
                     * @type {Object}
                     */
                    this.headers = null;
                    /**
                     * @type {number}
                     */
                    this.timeout = 0;
                    /**
                     * @type {string}
                     */
                    this.password = '';
                    /**
                     * @type {boolean}
                     */
                    this.hasContent = false;
                    /**
                     * @type {boolean}
                     */
                    this.crossDomain = false;
                    /**
                     * @type {Subscriber}
                     */
                    this.progressSubscriber = null;
                    /**
                     * @type {string}
                     */
                    this.responseType = '';
                }
                /**
                 * @return {XMLHttpRequest}
                 */
                AjaxRequestDoc.prototype.createXHR = function () {
                    return null;
                };
                /**
                 * @param {AjaxResponse} response
                 * @return {T}
                 */
                AjaxRequestDoc.prototype.resultSelector = function (response) {
                    return null;
                };
                return AjaxRequestDoc;
            }());
            exports_1("AjaxRequestDoc", AjaxRequestDoc);
        }
    }
});
//# sourceMappingURL=MiscJSDoc.js.map