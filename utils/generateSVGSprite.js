var SVGSpriter = require("svg-sprite"),
	path = require("path"),
	fs = require("fs")

var spriter = new SVGSpriter({
	dest: "./src/components/",
	svg: {
		xmlDeclaration: false,
		doctypeDeclaration: false,
		namespaceClassnames: false,
		transform: (svg) => {
			return `<template>${svg}</template>`
		},
	},
	mode: {
		symbol: {
			dest: "",
			sprite: "IconSprite.vue",
			inline: true,
		},
	},
})
const { links } = require("../src/data.json")
links.forEach(({ icon }) => {
	if (!icon) return
	spriter.add(
		path.resolve(`./src/assets/littlelink/icons/${icon}.svg`),
		`${icon}.svg`,
		fs.readFileSync(`./src/assets/littlelink/icons/${icon}.svg`, "utf-8")
	)
})

spriter.compile((error, result) => {
	if (error) console.error(`Sprite compile error: ${error}`)
	result = result.symbol.sprite
	try {
		fs.mkdirSync(path.dirname(result.path), { recursive: true })
		fs.writeFileSync(result.path, result.contents)
	} catch (e) {
		console.error(`Error writing IconSprite.vue: ${e}`)
	}
})
