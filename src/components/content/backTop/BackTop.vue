<template>
	<div class="back-top" @click="">
		<img src="~assets/img/common/top.png">
	</div>
</template>

<script>
		export default {

		name: "BackTop"

		}
</script>

<style scoped>
	.back-top{
		position: fixed;
		right: 8px;
		bottom: 55px;
		z-index: 10;
		width: 43px;
		height: 43px;
	}
	.back-top img{
		width: 43px;
		height: 43px;
	}
</style>
