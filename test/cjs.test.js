import src from '../src';
import cjs from '../src/cjs';

describe('CJS', () => {
  it('should export loader', () => {
    expect(cjs).toEqual(src);
  });

  it('should export "raw" flag', () => {
    expect(cjs.raw).toBeUndefined();
  });
});
