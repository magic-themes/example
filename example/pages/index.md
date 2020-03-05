# @magic-themes/example

this is the
[@magic-themes](https://github.com/magic-themes)
example theme.
It is being used in the [@magic example page](https://github.com/magic/example)

### installation

`npm install magic-themes/docs`

## usage

### #usage-require require in config.mjs:

```
// config.mjs

export default {
  // ... other config
  THEME: 'docs',
}
```

### #usage- customize

you can customize and add any kind of style

create /assets/themes/docs/index.mjs, any css there will overwrite the theme css

```
// /assets/themes/docs/index.mjs

export default vars => ({
  body: {
    color: vars.colors.orange[900],
  },
})
```

magic will then find and merge the themes automatically, just as it did on this page
