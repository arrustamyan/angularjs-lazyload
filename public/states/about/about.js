System.register(["../../shared/services/service3", "./aboutService"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var states;
    return {
        setters: [
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
            states = {
                states: [
                    {
                        name: 'about',
                        url: '/about',
                        controller: ['service3', function (service3) { }],
                        template: '<h1>about</h1>',
                    }
                ]
            };
            exports_1("default", states);
        }
    };
});
