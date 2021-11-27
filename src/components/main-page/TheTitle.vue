<template>
	<section class="main-page-title">
		<div class="main-page-title__container main-container">
			<h1 class="main-page-title__title">{{name}}</h1>
			<p class="main-page-title__description" >{{description}}</p>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "TheTitle",
	data(){
		return {
			name: "Эдуард Сясин",
			description: "Frontend разработчик"
		}
	}
})
</script>

<style lang="scss" scoped>
	.main-page-title{
		min-height: 100vh;
		background: url("../../assets/keyboard.jpg") fixed;
		color: white;
	}
	
	.main-page-title__container{
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.main-page-title__title{
		margin-top: 25%;
		font-size: 60px;
	}
	
	.main-page-title__description{
		margin: 0;
		font-size: 25px;
	}
	
	
</style>