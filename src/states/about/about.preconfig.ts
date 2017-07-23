import module from '../../shell/module';

module.config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state({
        name: 'about.**',
        url: '/about',
        lazyLoad: () => {
            return System.import('../../shared/shared', __moduleName)
                .then(() => System.import('./about', __moduleName))
                .then(module => module.default);
        }
    });
}]);
