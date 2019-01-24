const fs = require('fs');
const chokidar = require('chokidar');

// auto-detects when a new css file is added and generates a blank .d.ts file to keep Typescript happy
const watcher = chokidar.watch('src', { persistent: true, dot: true });

watcher.on('add', function (path) {
    if (!(/\.scss$/.test(path))) {
        return;
    }
    const typingsFile = `${path}.d.ts`;
    if (!fs.existsSync(typingsFile)) {
        const content = "declare const mod: { [cls: string]: string }\nexport default mod";
        fs.writeFile(typingsFile, content, (err) => {
            if (err) {
                throw err;
            }
        });
    }
});
