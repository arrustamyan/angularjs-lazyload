import module from '../../shell/module';

import '../../shared/services/service3';
import './aboutService';

let states = {
    states: [
        {
            name: 'about',
            url: '/about',
            controller: ['service3', function(service3) {}],
            template: '<h1>about</h1>',
        }
    ]
};

export default states;
