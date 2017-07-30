module.exports = {
  paths: {
    public: 'build'
  },
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },
  plugins: {
    postcss: {
      processors: [
        require('postcss-cssnext'),
      ]
    }
  },
  overrides: {
  production: {
    paths: {
      public: 'dist'
    },
    optimize: true,
    sourceMaps: false,
    plugins: {autoReload: {enabled: false}}
  }
}
};