const { links } = require("./src/data.json")
const postCssPurge = require("@fullhuman/postcss-purgecss")
const vuePath = /\.vue(\?.+)?$/

module.exports = {
	plugins: [
		postCssPurge({
			contentFunction: (sourceInputFile) => {
				if (vuePath.test(sourceInputFile)) {
					return [sourceInputFile.replace(vuePath, ".vue")]
				}
				return ["src/**/*.vue", "index.html"]
			},
			safelist: links.filter(({ icon }) => icon !== undefined).map(({ icon }) => `button-${icon}`),
		}),
	],
}
