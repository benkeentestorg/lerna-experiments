import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
const helpers = require('../../build/sass-typings-helpers.js');


export default {
    plugins: [
        postcss({
            modules: true,
            extract: true,
            generateScopedName: '[name]__[local]___[hash:base64:3]',
            plugins: [
                autoprefixer()
            ],
            modules: {
                getJSON: (filepath, json) => {
                    helpers.generateTypingsFile(filepath, Object.keys(json));
                }
            },
            extensions: ['.scss', '.css']
        }),

        typescript({
            clean: true
        })
    ],
    external: [
        'react'
    ],
    input: './src/dialogs.tsx',
    output: [
        {
            file: './dist/dialogs.js',
            format: 'es',
            sourcemap: true
        }
    ]
};
