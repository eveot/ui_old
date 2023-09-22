import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import alias from 'rollup-plugin-alias';
import serve from 'rollup-plugin-serve';
import less from 'rollup-plugin-less';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
    },
    plugins: [
        alias({
        }),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
        }),
        less({
            insert: true,
        }),
        babel({
            extensions: ['.tsx'],
            exclude: 'node_modules/**',
        }),
        serve({
            contentBase: ['dist'],
            port: 3000,
        }),
    ],
};
