<template>
	<div class="recommend">
		<div v-for="item in recommends" class="recommend-item">
			<img :src="item.image">
			<div>{{item.title}}</div>
		</div>
	</div>
</template>

<script>
export default {
	props : {
		recommends : {
			type: Array,
			default : []
		}
	},
	name: "RecommendView"
}
</script>

<style scoped>
	.recommend{
		width: 100%;
		display: flex;
		text-align: center;
		font-size: 12px;
		padding: 10px 0 20px;
		border-bottom: 10px solid #eee;
	}

	.recommend .recommend-item{
		flex: 1;
	}

	.recommend .recommend-item img{
		width: 70px;
		margin-bottom: 10px;
	}

</style>
