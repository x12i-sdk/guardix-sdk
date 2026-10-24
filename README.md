# @x12i/guardix-sdk usage example

Guardix agent SDK: automatic key-proof enrollment, identity stores, upgrade redemption, typed clients and CLI.

This consuming application demonstrates **generate a local agent key and verify a proof signature** using the published npm package, pinned to `0.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Enroll an agent with a generated key proof and retain its identity in a supported store.
- Use the typed authority or operator client for an explicitly authorized governance operation.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/guardix-sdk)
- [Implementation monorepo](https://github.com/x12i/guardix)
- [Reviewed package source](https://github.com/x12i/guardix/tree/cf16c5618b1af60f283e91fe2da66515d222eb5e/packages/guardix-sdk)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
