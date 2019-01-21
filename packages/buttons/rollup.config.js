import typescript from 'rollup-plugin-typescript2';
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import postcss from 'rollup-plugin-postcss';
import postcss from 'rollup-plugin-postcss-modules';
import postcssNested from 'postcss-nested';

import autoprefixer from 'autoprefixer';
import sass from 'node-sass';

// const dev = 'development';
// const prod = 'production';
// const env = (process.env.NODE_ENV === prod || process.env.NODE_ENV === dev) ? process.env.NODE_ENV : dev;

const plugins = [
    // resolve(),
    postcss({
        extract: true,
        writeDefinitions: true,
        plugins: [
            autoprefixer(),
            postcssNested()
        ]
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
            format: 'es',
            sourcemap: true
        }
    ]
};

