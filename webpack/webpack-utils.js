const path = require('path');
const fs = require('fs');

const rootDir = fs.realpathSync(process.cwd());

module.exports.resolve = function resolve(relativePath) {
  return path.resolve(rootDir, relativePath);
};