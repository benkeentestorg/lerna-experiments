import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
//import replace from 'rollup-plugin-replace';
//import postcss from 'rollup-plugin-postcss';
//import autoprefixer from 'autoprefixer';
//import clean from 'postcss-clean';
//import babili from 'rollup-plugin-babili';

const dev = 'development';
const prod = 'production';
const env = (process.env.NODE_ENV === prod || process.env.NODE_ENV === dev) ? process.env.NODE_ENV : dev;

const plugins = [

    //replace({'process.env.NODE_ENV': JSON.stringify(env)}),

    resolve(),
    commonjs(),


    // commonjs({
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
    typescript()
];

// if (env === prod) {
//     plugins.push(babili({ comments: false }));
// }

export default {
    plugins,
    external: [
        'react',
    ],
    input: './src/index.tsx',
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
