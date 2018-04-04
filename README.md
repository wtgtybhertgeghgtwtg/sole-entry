# sole-entry

> Get the sole entry of an object.

Pretty much just `const [entry] = Object.entries(obj);`, but asserts that `entry` is the only entry.

## Install

```
$ yarn add sole-entry
```

## Usage

```js
const soleEntry = require('sole-entry');

// Returns ['foo', 1];
const entry = soleEntry({foo: 1});

// This throws.
soleEntry({foo: 1, bar: 2});

// So does this.
soleEntry({});
```

## API

### soleEntry(obj)

Returns the sole entry of `obj`, or throws if it does not have exactly one entry.

#### obj

* Type: `object`

An object. Hopefully with one and only one entry.

## License

MIT © Matthew Fernando Garcia
