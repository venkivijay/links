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