import pkg from '../package.json';

const testDist = process.env.LIB_DIR === 'dist';

describe('manyid dist files', () => {
  // https://github.com/ant-design/ant-design/issues/1638
  // https://github.com/ant-design/ant-design/issues/1968
  it('exports modules correctly', () => {
    // eslint-disable-next-line global-require,import/no-unresolved
    const manyid = testDist ? require('../dist/manyid') : require('../components');
    expect(Object.keys(manyid)).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/1970
  // https://github.com/ant-design/ant-design/issues/1804
  if (testDist) {
    it('manyid.js should export version', () => {
      // eslint-disable-next-line global-require,import/no-unresolved
      const manyid = require('../dist/manyid');
      expect(manyid).toBeTruthy();
      expect(manyid.version).toBe(pkg.version);
    });

    it('manyid.min.js should export version', () => {
      // eslint-disable-next-line global-require,import/no-unresolved
      const manyid = require('../dist/manyid.min');
      expect(manyid).toBeTruthy();
      expect(manyid.version).toBe(pkg.version);
    });
  }
});
