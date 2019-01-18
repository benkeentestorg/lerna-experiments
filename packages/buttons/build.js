const DtsCreator  = require('typed-css-modules');
const glob = require('glob');

let creator = new DtsCreator();

glob('**/*.scss', {}, (error, filePaths) => {
    for (const filePath of filePaths) {
        creator.create(filePath)
            .then((content) => content.writeFile())
            .catch((error) => console.log(error))
    }
});

// creator.create('src/style.css', content).then(content => {
//     console.log(content.tokens);          // ['myClass']
//     console.log(content.formatted);       // 'export const myClass: string;'
//     content.writeFile();                  // writes this content to "src/style.css.d.ts"
// });