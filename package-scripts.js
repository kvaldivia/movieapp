const build = {
  default: {
    script: 'ng build',
    description: 'Build the app'
  },
  components: {
    script: `
    pushd lib/mojix-components && npm install && npm run build && yalc publish && popd &&
    pushd lib/mojix-components-module && yalc update && npm install && npm run build && yalc publish && popd
    `,
    description: 'Build the components inside lib/'
  }
};

module.exports = {
  scripts: {
    ng: 'ng',
    default: 'ng serve',
    test: 'ng test',
    lint: 'ng lint',
    e2E: 'ng e2e',
    build,
  }
};
