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
            module_1.default.run(['$rootScope', function ($rootScope) {
                    $rootScope.$on('myEvent', function () {
                        console.log('myEvent fired');
                    });
                }]);
        }
    };
});
