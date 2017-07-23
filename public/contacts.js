System.register("public/states/contacts/contacts", ["../../shared/services/service3"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var states;
    return {
        setters: [function (_1) {}],
        execute: function () {
            states = {
                states: [{
                    name: 'contacts',
                    url: '/contacts',
                    controller: function () {},
                    template: '<h1>contacts</h1>'
                }]
            };
            exports_1("default", states);
        }
    };
});