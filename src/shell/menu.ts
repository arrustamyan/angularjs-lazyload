import module from "./module";

import '../shared/services/service2';

module.component('nav', {
    controller: ['service2', function(service2) {}],
    template: `
    <ul>
        <li><a ui-sref="home">home</a></li>
        <li><a ui-sref="about">about</a></li>
        <li><a ui-sref="contacts">contacts</a></li>
    </ul>`
});
