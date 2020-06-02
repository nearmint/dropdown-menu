module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js',
      libraryTarget: 'var',
      library: 'EntryPoint'
    },
    watch: true
  };