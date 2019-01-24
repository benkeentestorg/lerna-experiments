import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import { generateTypingsFile } from './build.js';

export default {
    plugins: [
        postcss({
            modules: true,
            extract: true,
            generateScopedName: '[name]__[local]___[hash:base64:5]',
            plugins: [
                autoprefixer()
            ],
            modules: {
                getJSON: (filepath, json, outpath) => {
                    console.log('generating.');
                    generateTypingsFile(filepath, Object.keys(json));
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
    input: './src/buttons.tsx',
    output: [
        {
            file: './dist/buttons.js',
            format: 'es',
            sourcemap: true
        }
    ]
};
