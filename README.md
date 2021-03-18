# eslint-config-barecheck

Eslint + Airbnb + Prettier + a few more rules to have better JS linting

This eslint config gives extended list of airbnb + prettier rules that use can use in your Node.js project and stop handling hell of dependencies for eslint plugins.

## Installation

- Install eslint config dependency

with `yarn`:

```bash
yarn add eslint-config-barecheck-base --dev

```

or `npm`:

```bash
npm install eslint-config-barecheck-base --dev

```

- Add `.eslintrc.js` at the root directory of project

```js
module.exports = {
  extends: ["eslint-config-barecheck-base"],
  rules: {}
};
```

## Developers guide

### Publish package

Be sure you logged in

- `npm login`

[Update package version](https://docs.npmjs.com/cli/v7/commands/npm-version)

- `npm version [<newversion> | major | minor | patch`

Publish new npm package version

- `npm publish --access public`
