# Links

This project is built upon [LittleLink](https://github.com/sethcottle/littlelink). It uses assets from LittleLink and scraps out all unused CSS and SVGs thus reducing the bundle size. Customizing Links is as easy as editing src/data.json file.

## TOC

- [Links](#links)
  - [TOC](#toc)
  - [Why?](#why)
  - [Getting Started](#getting-started)
    - [Clone](#clone)
    - [Configure](#configure)
    - [Development](#development)
    - [Build & Preview](#build--preview)
    - [Deploy](#deploy)
  - [Maintain](#maintain)
- [What is LittleLink?](#what-is-littlelink)

## Why?
Customizing LittleLink involves a lot of manual work. This project was developed to easily customize LittleLink without modifying its source.

## Getting Started

### Clone

```bash
$ git clone --recurse-submodules https://github.com/venkivijay/Links
```

### Configure

 - Edit `src/data.json` file as per your need.
    <details>
    <summary>Explanation</summary>

    ### `bio` section
    - name
        - Rendered as `<h1>` below avatar
    - description
        - Rendered as `<p>` below name
    ### `links` section
    > Should be array of link objects
    - button
        - This string is concatenated with `button-` and used as css class for buttons
        - If not provided, `button-default` css class will be used
        - Refer LittleLink css `src/assets/littlelink/css/brands.css` 
    - icon
        - This string should represent the svg icon name present under `src/assets/littlelink/icons`
        - It will be used to purge unused css, svg and to render svg icons in buttons.
        - If not provided, icon will be ignored in button but displayText must be provided.
    - displayText
        - Text to be displayed in button next to icon
        - If not provided, capitalized icon value will be used
    - url
        - Hyperlink for button
    </details>

```json
{
  "bio": {
    "name": "Your name",
    "description": "Any text"
  },
  "links": [
    {
      "url": "https://venkivijay.com",
      "displayText": "Portfolio"
    },
    {
      "button": "github",
      "icon": "github",
      "url": "https://github.com/venkivijay"
    }
  ]
}
```

### Development

This will initially run `utils/generateSVGSprite.js` to generate SVG Sprites as vue component and stores it under `src/components/IconSprite.vue`. After this dev server will be started.

> If icon value in `src/data.json` has been updated, then either run `npm run sprite` or restart dev server to regenerate IconSprite.vue

```bash
$ npm run dev
```

### Build & Preview

```bash
$ npm run build
```

```bash
$ npm run serve
```

### Deploy

Generated `dist/` is static and can be deployed anywhere. As of now, deployment is handled using Netlify.

## Maintain

LittleLink repo is a submodule to this project and lives under `src/assets/littlelink`. If you need to pull in latest changes from LittleLink repo, then run

```bash
$ git submodule update --remote --merge
```
# What is LittleLink?

![LittleLink](https://cdn.cottle.cloud/littlelink/social-circle.png)

LittleLink is a lightweight DIY alternative to services like [Linktree](https://linktr.ee)
and [many.link](https://many.link/). LittleLink was built using [Skeleton](http://getskeleton.com/), a dead simple, responsive boilerplate—we just stripped out some additional code you wouldn't need and added in branded styles for popular services. 😊

![Themes](https://cdn.cottle.cloud/littlelink/themes.png)

LittleLink has more than 20 company button styles you can use and we'll be throwing more in soon. You'll also find a light and dark theme ready to go. Not a fan of the colors? Update `skeleton-light.css` or `skeleton-dark.css` to the HEX values of your choosing. 

![Performance](https://cdn.cottle.cloud/littlelink/performance.png)

Using [Skeleton](http://getskeleton.com/) let us build something that loads quickly & doesn't have any of the unnecessary bloat you would get from using a large framework for a page that requires nothing more than simplicity. LittleLink scored a 99/100 in performance when tested with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse).