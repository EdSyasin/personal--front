<template>
	<the-title></the-title>
	<div style="height: 100vh"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheTitle from '@/components/main-page/TheTitle.vue';

export default defineComponent({
	name: "MainPage",
	components: {
		TheTitle
	}
})
</script>

<style lang="scss" scoped>

</style>