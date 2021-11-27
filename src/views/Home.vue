<template>
	<div class="container">
		<div class="row">
			<div class="column" style="margin-top: 10%">
				<img class="avatar" src="../assets/avatar.jpg" alt="" />
				<h1>{{ bio.name }}</h1>
				<p v-if="bio.description">{{ bio.description }}</p>
				<Link v-for="link in links" :key="link.icon" :link="link" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import { bio, links } from "../data.json"
	import Link from "../components/Link.vue"
</script>

<style scoped>
	.avatar {
		width: 125px;
		height: 125px;
		border-radius: 50%;
	}
</style>
