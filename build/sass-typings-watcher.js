const fs = require('fs');
const chokidar = require('chokidar');
const helpers = require('./sass-typings-helpers.js');

const watcher = chokidar.watch('packages/**/src', { persistent: true, dot: true });

// when `yarn start` is running, this auto-detects new css files being created and adds a corresponding .d.ts file to
// keep Typescript happy. Note: it doesn't contain the correct exports yet so IDE intellisense won't recognize it
// until rollup next runs. That will occur whenever the css file is imported into a typescript file.

// Note: if you create a css file when `yarn start` is NOT running, you're responsible the typings files need to be
// created separately. For that either do it manually, or run `yarn sassTypings`
watcher.on('add', function (path) {
    if (!(/\.scss$/.test(path))) {
        return;
    }
    const typingsFile = `${path}.d.ts`;
    if (!fs.existsSync(typingsFile)) {
        helpers.createDefaultTypingsFile(typingsFile);
    }
});
