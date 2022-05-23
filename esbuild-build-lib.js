import { build } from "esbuild";
import { glsl } from "esbuild-plugin-glsl";
import { nodeExternalsPlugin }  from 'esbuild-node-externals'

build({
    entryPoints: ['src/index.ts'],
    outdir: 'lib',
    bundle: true,
    sourcemap: true,
    minify: false,
    splitting: false,
    format: 'esm',
    target: ['esnext'],
    tsconfig: './tsconfig.module.json',
    plugins: [
        glsl({
            minify: true
        }),
        nodeExternalsPlugin()
    ]
})
.catch(() => process.exit(1));

