// @flow
import assert from 'assert';
import isobject from 'isobject';

export default function soleEntry<Value>(obj: {
  [key: string]: Value,
}): [string, Value] {
  assert(isobject(obj), '"obj" must be an object.');
  const entries = Object.entries(obj);
  assert(entries.length === 1, '"obj" must have one and only one property.');
  // $FlowFixMe
  return entries[0];
}
