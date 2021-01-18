<template>
		<main-tab-bar class="main-tab-bar"/>
		<router-view></router-view>
</template>

<script>
	import MainTabBar from "components/content/MainTabBar"

	export default {
		components: {
			MainTabBar
		},

	}

</script>
<style>
  @import "assets/css/base.css";

	.main-tab-bar{
		position: absolute;
		z-index: 10;
	}
</style>
