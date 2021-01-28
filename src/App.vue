<template>
		<div>
			<main-tab-bar class="main-tab-bar"/>
			<router-view v-slot="{Component}">
				<keep-alive  exclude="Detail">
					<component :is="Component" />
				</keep-alive>
			</router-view>
		</div>

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
