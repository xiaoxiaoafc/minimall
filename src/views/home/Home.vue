<template>
首页
	<router-view/>
	<router-link to="/home/featureView">Go to featureView</router-link>
</template>

<script>
export default {
  name: "Home",
	created :function () {
  	console.log("home create");
	}
}
</script>

<style scoped>

</style>
