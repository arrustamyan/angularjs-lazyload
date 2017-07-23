import angular from 'angular';
import module from './module';

import './header';
import './menu';

import '../shared/configs/config';

import '../states/home/home';
import '../states/about/about.preconfig';
import '../states/contacts/contacts.preconfig';

angular.bootstrap(document.body, [module.name]);

export default module;
