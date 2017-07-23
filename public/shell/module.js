System.register(["systemjs", "angular"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_1, app;
    return {
        setters: [
            function (_1) {
            },
            function (angular_1_1) {
                angular_1 = angular_1_1;
            }
        ],
        execute: function () {
            app = angular_1.default.module('lazyApp', ['ui.router']);
            app.config(function ($provide, $compileProvider, $filterProvider, $controllerProvider, $urlRouterProvider) {
                app.factory = $provide.factory.bind($provide);
                app.component = $compileProvider.component.bind($compileProvider);
                app.directive = $compileProvider.directive.bind($compileProvider);
                app.filter = $filterProvider.register.bind($filterProvider);
                app.controller = $controllerProvider.register.bind($controllerProvider);
                app.service = $provide.service.bind($provide);
                // app.register = {
                //     factory: $provide.factory.bind($provide),
                //     component: $compileProvider.component.bind($compileProvider),
                //     directive: $compileProvider.directive.bind($compileProvider),
                //     filter: $filterProvider.register.bind($filterProvider),
                //     controller: $controllerProvider.register.bind($controllerProvider),
                //     service: $provide.service.bind($provide)
                // };
                $urlRouterProvider.otherwise('/');
            });
            app.run(['$injector', function ($injector) {
                    app.run = function (injectable) {
                        $injector.invoke(injectable);
                        return app;
                    };
                }]);
            exports_1("default", app);
        }
    };
});
