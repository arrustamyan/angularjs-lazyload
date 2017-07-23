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
                        name: 'about.**',
                        url: '/about',
                        lazyLoad: function () {
                            return System.import('../../shared/shared', __moduleName)
                                .then(function () { return System.import('./about', __moduleName); })
                                .then(function (module) { return module.default; });
                        }
                    });
                }]);
        }
    };
});
