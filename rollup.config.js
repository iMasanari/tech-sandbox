import typescript from 'rollup-plugin-typescript2'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  plugins: [
    typescript({
      abortOnError: false
    }),
    commonjs({
      namedExports: {
        'node_modules/@hyperapp/router/dist/router.js': ['location', 'Link']
      }
    }),
    nodeResolve(),
    postcss({
      extract: true,
      minimize: isProduction,
    }),
    isProduction && uglify(),
  ],
}
