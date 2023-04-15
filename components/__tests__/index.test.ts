const OLD_NODE_ENV = process.env.NODE_ENV;
process.env.NODE_ENV = 'development';
const manyid = require('..');

describe('manyid', () => {
  afterAll(() => {
    process.env.NODE_ENV = OLD_NODE_ENV;
  });

  it('exports modules correctly', () => {
    expect(Object.keys(manyid)).toMatchSnapshot();
  });
});
