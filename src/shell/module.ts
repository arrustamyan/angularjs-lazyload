import 'systemjs';
import angular from 'angular';

interface ILazyModule extends angular.IModule {
    register: any;
}

let app = <ILazyModule>angular.module('lazyApp', ['ui.router']);

app.config((
    $provide,
    $compileProvider,
    $filterProvider,
    $controllerProvider,
    $urlRouterProvider,

) => {

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

    $urlRouterProvider.otherwise('/')

});

app.run(['$injector', ($injector) => {
    app.run = (injectable: angular.Injectable<Function>): angular.IModule => {
        $injector.invoke(<any>injectable);
        return app;
    };
}]);

export default app;
