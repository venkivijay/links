<template>
	<a
		@click="handleClick"
		:title="getTitle"
		:href="url"
		:class="getClass"
		class="button"
		target="_blank"
		rel="noopener"
	>
		<svg v-if="icon" class="icon" role="img">
			<use :xlink:href="getSrc"></use>
		</svg>
		{{ getText }}
	</a>
	<br />
</template>
<script setup>
	import { computed } from "@vue/reactivity"

	const props = defineProps({
		link: {
			type: Object,
			required: true,
		},
	})
	const { title, button, icon, url, displayText } = props.link
	const getTitle = computed(() => {
		if (title) return title
		return getText.value
	})
	const getClass = computed(() => {
		if (button) return `button-${button.trim()}`
		return "button-default"
	})
	const getSrc = computed(() => `#${icon.trim()}`)
	const getText = computed(() => {
		if (displayText) return displayText.trim()
		return icon.trim().replace(/^\w/, (c) => c.toUpperCase())
	})
	function handleClick(e) {
		gtag("event", "click", {
			event_category: "link",
			event_label: getText.value,
		})
	}
</script>
