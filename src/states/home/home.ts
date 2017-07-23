import module from '../../shell/module';

module.config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state({
        name: 'home',
        url: '/',
        controller: function() {},
        template: `<h1>Home</h1>`,
    });
}]);
