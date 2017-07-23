System.register(["./module", "../shared/services/service2"], function (exports_1, context_1) {
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
            module_1.default.component('nav', {
                controller: ['service2', function (service2) { }],
                template: "\n    <ul>\n        <li><a ui-sref=\"home\">home</a></li>\n        <li><a ui-sref=\"about\">about</a></li>\n        <li><a ui-sref=\"contacts\">contacts</a></li>\n    </ul>"
            });
        }
    };
});
