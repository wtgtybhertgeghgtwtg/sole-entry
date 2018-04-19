// @flow
import soleEntry from '../src';

describe('soleEntry', () => {
  describe('invariants', () => {
    it('throws if "obj" is undefined.', () => {
      // $FlowFixMe
      expect(() => soleEntry()).toThrow('"obj" must be an object.');
    });

    it('throws if "obj" is not an object.', () => {
      // $FlowFixMe
      expect(() => soleEntry('Not an object')).toThrow(
        '"obj" must be an object.',
      );
    });

    it('throws if "obj" is null.', () => {
      // $FlowFixMe
      expect(() => soleEntry(null)).toThrow('"obj" must be an object.');
    });

    it('throws if "message" is not a string or undefined.', () => {
      // $FlowFixMe
      expect(() => soleEntry({foo: 1}, 1)).toThrow(
        '"message" must be a string or undefined.',
      );
    });
  });

  it('throws if "obj" has no properties.', () => {
    expect(() => soleEntry({})).toThrow(
      '"obj" must have one and only one property.',
    );
  });

  it('throws if "obj" has more than one property.', () => {
    expect(() => soleEntry({foo: 1, bar: 'two'})).toThrow(
      '"obj" must have one and only one property.',
    );
  });

  it('throws with "message" if provided.', () => {
    const message = 'Some custom message.';
    expect(() => soleEntry({}, message)).toThrow(message);
  });

  it('returns the sole entry of the input.', () => {
    const entry = soleEntry({foo: 1});
    expect(entry).toEqual(['foo', 1]);
  });
});
