module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dropdown',
        filename: 'dropdown.js',
      libraryTarget: 'var',
      library: 'EntryPoint'
    }
  };