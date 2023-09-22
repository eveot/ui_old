import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import less from 'rollup-plugin-less';
import css from 'rollup-plugin-css-only';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
        }),
        less({
            insert: true,
        }),
        css({ output: 'bundle.css' }),
        babel({
            extensions: ['.tsx', '.less'],
            exclude: 'node_modules/**',
        }),
        serve({
            contentBase: ['dist'],
            port: 3000,
        }),
    ],
};
