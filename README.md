# DaisyUI + TailwindCSS bug with "hovertr"

```sh
$ npm install && npm run build
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility

added 238 packages, and audited 239 packages in 2s

90 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

> tailwindcss-hovertr@1.0.0 build
> rm -rf dist && parcel build src/index.html

console:
console: %s 🌼 daisyUI components 2.33.0  https://github.com/saadeghi/daisyui
console: %s ✔︎ Including:  base, components, themes[1], utilities
console:

@parcel/transformer-css: Unsupported pseudo class or element: hovertr

  /tmp/tailwindcss-hovertr/src/index.css:4299:23



@parcel/transformer-css: Unsupported pseudo class or element: hovertr

  /tmp/tailwindcss-hovertr/src/index.css:4300:26



@parcel/transformer-css: Unsupported pseudo class or element: hovertr

  /tmp/tailwindcss-hovertr/src/index.css:4301:26



@parcel/transformer-css: Unsupported pseudo class or element: hovertr

  /tmp/tailwindcss-hovertr/src/index.css:4302:26


✨ Built in 1.22s

dist/index.html               573 B    157ms
dist/index.81590b6e.css    119.1 KB     79ms
```
