// @flow
import assert from 'assert';
import isobject from 'isobject';

export default function soleEntry<Value>(
  obj: {[key: string]: Value},
  message: string = '"obj" must have one and only one property.',
): [string, Value] {
  assert(isobject(obj), '"obj" must be an object.');
  assert(
    typeof message === 'string',
    '"message" must be a string or undefined.',
  );
  const entries = Object.entries(obj);
  assert(entries.length === 1, message);
  // $FlowFixMe
  return entries[0];
}
