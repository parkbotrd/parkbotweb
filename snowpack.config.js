const { version } = require('./package.json');
const { execSync } = require('child_process');

process.env.SNOWPACK_PUBLIC_VERSION = version;
process.env.SNOWPACK_PUBLIC_HASH = execSync('git rev-parse HEAD').toString().replace('\n', '');
process.env.SNOWPACK_PUBLIC_BRANCH = execSync('git rev-parse --abbrev-ref HEAD').toString().replace('\n', '');

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: '@snowpack/app-scripts-react',
  devOptions: {
    port: 3000,
    fallback: 'index.html'
  },
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-optimize'
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    polyfillNode: true
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  },
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
      target: 'es2020'
    },
    // source: "skypack"
  }
};
