const fs = require('fs');
const path = require('path');

/**
 * Called during the rollup process.
 * @param filepath
 * @param classNames
 */
export const generateTypingsFile = (filepath, classNames) => {
    const filename = path.basename(filepath);
    const ns = path.parse(filename).name;

    let typingsContent = `declare namespace ${ns} {\n`;
    classNames.forEach((className) => {
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
