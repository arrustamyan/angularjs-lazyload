System.register("public/shared/services/service3", ["../../shell/module"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [function (module_1_1) {
            module_1 = module_1_1;
        }],
        execute: function () {
            module_1.default.service('service3', function () {});
        }
    };
});
System.register("public/shared/runs/run", ["../../shell/module"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [function (module_1_1) {
            module_1 = module_1_1;
        }],
        execute: function () {
            module_1.default.run(['$rootScope', function ($rootScope) {
                $rootScope.$on('myEvent', function () {
                    console.log('myEvent fired');
                });
            }]);
        }
    };
});
System.register("public/shared/shared", ["./runs/run"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (_1) {}],
        execute: function () {}
    };
});