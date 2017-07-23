System.config({
    map: {
        "angular": "./public/vendor/angular",
        "systemjs": "./public/vendor/systemjs"
    },
    bundles: {
        'about.js': ['public/states/about/about'],
        'contacts.js': ['public/states/contacts/contacts'],
        'shared.js': ['public/shared/shared']
    }
});
