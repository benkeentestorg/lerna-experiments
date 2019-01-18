import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

import autoprefixer from 'autoprefixer';
import sass from 'node-sass';


const dev = 'development';
const prod = 'production';
const env = (process.env.NODE_ENV === prod || process.env.NODE_ENV === dev) ? process.env.NODE_ENV : dev;

const plugins = [
    resolve(),
    commonjs(),

    //replace({'process.env.NODE_ENV': JSON.stringify(env)}),
    //     // All of our own sources will be ES6 modules, so only node_modules need to be resolved with cjs
    //     include: 'node_modules/**',
    //     namedExports: {
    //         'node_modules/react/index.js': [
    //             'Component',
    //             'PropTypes',
    //             'createElement',
    //         ]
    //     },
    // }),
    // postcss({
    //     extract: true,  // extracts to `${basename(dest)}.css`
    //     plugins: [autoprefixer, clean],
    //     writeDefinitions: true,
    //     // postcssModulesOptions: { ... }
    // }),

    postcss({
        // preprocessor: (content, id) => new Promise((resolve, reject) => {
        //     const result = sass.renderSync({ file: id });
        //     resolve({ code: result.css.toString() });
        // }),
        // plugins: [
        //     autoprefixer
        // ],
        modules: true,
        sourceMap: true,
        extract: true,
        extensions: ['.scss', '.css']
    }),

    typescript()
];

export default {
    plugins,
    external: [
        'react'
    ],
    input: './src/buttons.tsx',
    output: [
        {
            file: './dist/buttons.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: './dist/buttons-es6.js',
            format: 'es',
            sourcemap: true
        }
    ]
};
