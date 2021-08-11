const babelJestMd = require('babel-jest');
const babelJest = babelJestMd.__esModule ? babelJestMd.default : babelJestMd;

const babelOptions = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};

module.exports = babelJest.createTransformer(babelOptions);
