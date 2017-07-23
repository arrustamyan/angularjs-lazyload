System.register(["./module", "../shared/services/service1"], function (exports_1, context_1) {
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
