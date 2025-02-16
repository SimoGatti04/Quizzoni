const path = require('path');

module.exports = {
  entry: './src/script.js',  // sposta il tuo script.js in una cartella "src"
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
