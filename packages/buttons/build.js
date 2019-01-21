// const DtsCreator  = require('typed-css-modules');
// const glob = require('glob');
//
// let creator = new DtsCreator();
//
// glob('**/*.css', {}, (error, filePaths) => {
//     for (const filePath of filePaths) {
//         creator.create(filePath)
//             .then((content) => content.writeFile())
//             .catch((error) => console.log(error))
//     }
// });
//
// creator.create('src/style.css', content).then(content => {
//     console.log(content.tokens);          // ['myClass']
//     console.log(content.formatted);       // 'export const myClass: string;'
//     content.writeFile();                  // writes this content to "src/style.css.d.ts"
// });
//
//
// const formatCSSDefinition = (name: string, classNames: string[]) => `\
// declare namespace ${name} {
// 	${classNames.map(t => `const ${t}: string`).join('\n\t')}
// }
// export default ${name}`
//
// async function writeCSSDefinition(cssPath: string, classNames: string[]): Promise<string> {
//     const name = camelcase(path.basename(cssPath, '.css'))
//     const definition = formatCSSDefinition(name, classNames)
//     const dPath = `${cssPath}.d.ts`
//     await fs.writeFile(dPath, `${definition}\n`)
//     return dPath
// }
