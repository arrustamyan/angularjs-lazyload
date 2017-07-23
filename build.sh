#!/bin/bash

set -e;

rm -rf public/shell;
rm -rf public/shared;
rm -rf public/states;
rm -rf public/vendor;
rm -f public/app.js;
rm -f public/about.js;
rm -f public/contacts.js;

./node_modules/.bin/tsc -p .;

main="public/app";
shared="public/shared";

# build the main bundle
./node_modules/.bin/jspm bundle public/shell/app "$main".js --skip-source-maps

# define the bundles
declare -a sources=(
    "public/states/about/about,public/about.js"
    "public/states/contacts/contacts,public/contacts.js"
);

# populate the command to get the common modules across bundles
common="";

for i in "${sources[@]}"; do
    KEY=${i%,*};
    VAL=${i#*,};

    common="$common & $KEY"

done

./node_modules/.bin/jspm bundle "(${common:3})" + public/shared/shared - "$main" "$shared".js --skip-source-maps

# create the bundles
for i in "${sources[@]}"; do
    KEY=${i%,*};
    VAL=${i#*,};

    ./node_modules/.bin/jspm bundle "$KEY" - "$main" - "$shared" "$VAL" --skip-source-maps

done

echo 'Done';
