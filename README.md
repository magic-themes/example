## @magic-themes/example

a simple [@magic](https://github.com/magic/core) example theme.

used in the [@magic example page](https://github.com/magic/example)

[demo](https://magic.github.io/example)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-themes/example.svg
[npm-url]: https://www.npmjs.com/package/@magic-themes/example
[travis-image]: https://img.shields.io/travis/com/magic-themes/example/master
[travis-url]: https://travis-ci.com/magic-themes/example
[appveyor-image]: https://img.shields.io/appveyor/ci/magicthemes/example/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicthemes/example/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-themes/example/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-themes/example
[greenkeeper-image]: https://badges.greenkeeper.io/magic-themes/example.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-themes/example.svg
[snyk-image]: https://snyk.io/test/github/magic-themes/example/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-themes/example

#### install:
```bash
npm install --save --save-exact @magic-themes/example
```

#### usage:

##### declare usage:
```javascript
// config.mjs:

module.exports = {
  //... other config
  THEME: 'example',

  // multiple themes
  // THEME: [...other themes, 'example']
}
```

@magic will then import and use the theme automagically.

##### overwrite
you can overwrite any style in this theme with your own.

create /assets/themes/example/index.mjs, any css there will overwrite the theme css

```javascript
export default vars => ({
  body: {
    color: vars.colors.orange[900],
  },
})
```

#### changelog
##### 0.0.1
first release

##### 0.0.2
update for @magic > 0.0.55

##### 0.0.3 - unreleased
...
