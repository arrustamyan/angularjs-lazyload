System.register(["angular", "./module", "./header", "./menu", "../shared/configs/config", "../states/home/home", "../states/about/about.preconfig", "../states/contacts/contacts.preconfig"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_1, module_1;
    return {
        setters: [
            function (angular_1_1) {
                angular_1 = angular_1_1;
            },
            function (module_1_1) {
                module_1 = module_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            },
            function (_4) {
            },
            function (_5) {
            },
            function (_6) {
            }
        ],
        execute: function () {
            angular_1.default.bootstrap(document.body, [module_1.default.name]);
            exports_1("default", module_1.default);
        }
    };
});
