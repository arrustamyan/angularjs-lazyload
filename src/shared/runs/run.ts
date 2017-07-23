import module from '../../shell/module';

module.run(['$rootScope', ($rootScope) => {
    $rootScope.$on('myEvent', () => {
        console.log('myEvent fired');
    });
}]);