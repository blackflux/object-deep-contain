const expect = require('chai').expect;
const objectAlign = require('../src/index');

describe('Testing deprecated', () => {
  it('Testing deprecated', () => {
    expect(() => objectAlign()).to.throw('Deprecated, please use object-lib instead.');
  });
});
