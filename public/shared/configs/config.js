System.register(["../../shell/module", "../services/service4"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [
            function (module_1_1) {
                module_1 = module_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            module_1.default.config(['service4Provider', function (service4Provider) { }]);
        }
    };
});
