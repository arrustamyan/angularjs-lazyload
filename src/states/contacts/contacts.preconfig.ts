import module from '../../shell/module';

module.config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state({
        name: 'contacts.**',
        url: '/contacts',
        lazyLoad: () => {
            return System.import('../../shared/shared', __moduleName)
                .then(() => System.import('./contacts', __moduleName))
                .then(module => module.default);
        }
    });
}]);
