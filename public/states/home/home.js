System.register(["../../shell/module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [
            function (module_1_1) {
                module_1 = module_1_1;
            }
        ],
        execute: function () {
            module_1.default.config(['$stateProvider', function ($stateProvider) {
                    $stateProvider.state({
                        name: 'home',
                        url: '/',
                        controller: function () { },
                        template: "<h1>Home</h1>",
                    });
                }]);
        }
    };
});
