const fs = require('fs');
const path = require('path');


/**
 * Called by rollup during the bundle process. This updates the typings files for sass files so intellisense will
 * @param filepath
 * @param classNames
 */
const generateTypingsFile = (filepath, classNames) => {
    const filename = path.basename(filepath);
    const ns = path.parse(filename).name;

    let typingsContent = `declare namespace ${ns} {\n`;
    classNames.forEach((className) => {

        // if the user entered a non camelCase class name, throw an error. TODO this prevents the invalid classname
        // being added but doesn't show anything to the console.
        if (/[^a-zA-Z0-9]/.test(className)) {
            console.error(`Invalid class name in ${filepath}: ${className}`);
            return;
        }

        typingsContent += `\tconst ${className}: string\n`;
    });
    typingsContent += `}\nexport default ${ns}`;

    const typingsFile = `${filepath}.d.ts`;
    fs.writeFile(typingsFile, typingsContent, (err) => {
        if (err) {
            throw err;
        }
    });
};


/**
 * Auto-generates a default typings file when a new sass file is created. All this does is output a generic declaration
 * so TS won't die when initially trying to import the file. Once the sass file is included in a TS file, rollup will
 * update the typings file with the correct content so intellisense will work.
 * @param file
 */
const createDefaultTypingsFile = (file) => {
    const content = "declare const mod: { [cls: string]: string }\nexport default mod";
    fs.writeFile(file, content, (err) => {
        if (err) {
            throw err;
        }
    });
};


module.exports = {
    generateTypingsFile,
    createDefaultTypingsFile
};
