const globby = require('globby');
const fs = require('fs');
const helpers = require('./sass-typings-helpers.js');

/**
 * Run `yarn sassTypings` to generate default typings files for sass files. They are generated automatically
 * when you're running `yarn start`, but if not, you can run this command to do it manually.
 */
(async () => {
    const paths = await globby([
        'packages/**/src/**/*.scss',
        '!(node_modules)'
    ]);

    if (!paths) {
        return;
    }

    paths.forEach((path) => {
        const typingsFile = `${path}.d.ts`;
        if (!(fs.existsSync(typingsFile))) {
            helpers.createDefaultTypingsFile(typingsFile);
        }
    });

})();