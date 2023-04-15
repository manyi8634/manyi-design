const manyid = require('./components');

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx?$/);

manyid.locales = {};

req.keys().forEach((mod) => {
  const matches = mod.match(/\/([^/]+).tsx?$/);
  manyid.locales[matches[1]] = req(mod).default;
});

module.exports = manyid;
