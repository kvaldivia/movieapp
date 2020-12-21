import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import autoprefixer from 'autoprefixer';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'mojix-components',
  globalScript: './src/globals/bootstrap.ts',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'mojix-components',
      directivesProxyFile: '../mojix-components-module/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  // globalStyle: 'src/globals/main.scss',
  plugins: [
    sass({
      injectGlobalPaths: ['src/globals/styles/main.scss'],
      // includePaths: ['src/components/**/*.scss']
    }),
    postcss({
      plugins: [autoprefixer({ cascade: false })]
    })
  ]
};
