import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import sass from 'node-sass';


// error: (!) postcss plugin: The onwrite hook used by plugin postcss is deprecated. The generateBundle hook should be used instead.
// https://github.com/egoist/rollup-plugin-postcss/pull/148


const dev = 'development';
const prod = 'production';
const env = (process.env.NODE_ENV === prod || process.env.NODE_ENV === dev) ? process.env.NODE_ENV : dev;


const plugins = [
    //replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),

    resolve(),

    // all of our own sources will be ES6 modules, so only node_modules need to be resolved with cjs
    // commonjs({
    //     include: 'node_modules/**',
    //     namedExports: {
    //         'node_modules/react/index.js': [
    //             'Component',
    //             'PropTypes',
    //             'createElement',
    //         ]
    //     }
    // }),

    typescript(),

    postcss({
        // plugins: [
        //     autoprefixer
        // ],

        // this is postcss-modules
        modules: {
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        },

        sourceMap: true,

        // extract: true,  // extracts to `${basename(dest)}.css`
        extensions: ['.scss', '.css']
    })
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
