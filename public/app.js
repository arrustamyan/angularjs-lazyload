System.register("public/shared/services/service1", ["../../shell/module"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [function (module_1_1) {
            module_1 = module_1_1;
        }],
        execute: function () {
            module_1.default.service('service1', function () {});
        }
    };
});
System.register("public/shell/header", ["./module", "../shared/services/service1"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [function (module_1_1) {
            module_1 = module_1_1;
        }, function (_1) {}],
        execute: function () {
            module_1.default.component('header', {
                controller: ['$scope', 'service1', function ($scope, service1) {
                    $scope.click = function () {
                        $scope.$emit('myEvent', { data: [] });
                    };
                }],
                template: '<h1 ng-click="click()">my header</h1>'
            });
        }
    };
});
System.register("public/shared/services/service2", ["../../shell/module"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [function (module_1_1) {
            module_1 = module_1_1;
        }],
        execute: function () {
            module_1.default.service('service2', function () {});
        }
    };
});
System.register("public/shell/menu", ["./module", "../shared/services/service2"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [function (module_1_1) {
            module_1 = module_1_1;
        }, function (_1) {}],
        execute: function () {
            module_1.default.component('nav', {
                controller: ['service2', function (service2) {}],
                template: "\n    <ul>\n        <li><a ui-sref=\"home\">home</a></li>\n        <li><a ui-sref=\"about\">about</a></li>\n        <li><a ui-sref=\"contacts\">contacts</a></li>\n    </ul>"
            });
        }
    };
});
System.register("public/shared/services/service4", ["../../shell/module"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [function (module_1_1) {
            module_1 = module_1_1;
        }],
        execute: function () {
            module_1.default.provider('service4', function () {
                return {
                    $get: function () {}
                };
            });
        }
    };
});
System.register("public/shared/configs/config", ["../../shell/module", "../services/service4"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [function (module_1_1) {
            module_1 = module_1_1;
        }, function (_1) {}],
        execute: function () {
            module_1.default.config(['service4Provider', function (service4Provider) {}]);
        }
    };
});
System.register("public/states/home/home", ["../../shell/module"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [function (module_1_1) {
            module_1 = module_1_1;
        }],
        execute: function () {
            module_1.default.config(['$stateProvider', function ($stateProvider) {
                $stateProvider.state({
                    name: 'home',
                    url: '/',
                    controller: function () {},
                    template: "<h1>Home</h1>"
                });
            }]);
        }
    };
});
System.register("public/states/about/about.preconfig", ["../../shell/module"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [function (module_1_1) {
            module_1 = module_1_1;
        }],
        execute: function () {
            module_1.default.config(['$stateProvider', function ($stateProvider) {
                $stateProvider.state({
                    name: 'about.**',
                    url: '/about',
                    lazyLoad: function () {
                        return System.import('../../shared/shared', __moduleName).then(function () {
                            return System.import('./about', __moduleName);
                        }).then(function (module) {
                            return module.default;
                        });
                    }
                });
            }]);
        }
    };
});
// PLACEHOLDER FILE 
System.registerDynamic("public/vendor/systemjs", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.registry.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
System.register("public/vendor/angular", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var angular;
    return {
        setters: [],
        execute: function () {
            angular = window.angular;
            exports_1("default", angular);
        }
    };
});
System.register("public/shell/module", ["systemjs", "angular"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var angular_1, app;
    return {
        setters: [function (_1) {}, function (angular_1_1) {
            angular_1 = angular_1_1;
        }],
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
System.register("public/states/contacts/contacts.preconfig", ["../../shell/module"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var module_1;
    return {
        setters: [function (module_1_1) {
            module_1 = module_1_1;
        }],
        execute: function () {
            module_1.default.config(['$stateProvider', function ($stateProvider) {
                $stateProvider.state({
                    name: 'contacts.**',
                    url: '/contacts',
                    lazyLoad: function () {
                        return System.import('../../shared/shared', __moduleName).then(function () {
                            return System.import('./contacts', __moduleName);
                        }).then(function (module) {
                            return module.default;
                        });
                    }
                });
            }]);
        }
    };
});
System.register("public/shell/app", ["angular", "./module", "./header", "./menu", "../shared/configs/config", "../states/home/home", "../states/about/about.preconfig", "../states/contacts/contacts.preconfig"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var angular_1, module_1;
    return {
        setters: [function (angular_1_1) {
            angular_1 = angular_1_1;
        }, function (module_1_1) {
            module_1 = module_1_1;
        }, function (_1) {}, function (_2) {}, function (_3) {}, function (_4) {}, function (_5) {}, function (_6) {}],
        execute: function () {
            angular_1.default.bootstrap(document.body, [module_1.default.name]);
            exports_1("default", module_1.default);
        }
    };
});