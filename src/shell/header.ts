import module from "./module";

import '../shared/services/service1';

module.component('header', {
    controller: ['$scope', 'service1', function($scope, service1) {
        $scope.click = () => {
            $scope.$emit('myEvent', { data: [] });
        };
    }],
    template: '<h1 ng-click="click()">my header</h1>'
});
