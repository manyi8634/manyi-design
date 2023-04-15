const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('manyid-with-locales.js')
  .hasFile('manyid-with-locales.min.js')
  .hasFile('manyid.js')
  .hasFile('manyid.min.js')
  .hasFile('reset.css');

// eslint-disable-next-line no-console
console.log(chalk.green('✨ `dist` directory is valid.'));
