<template>
	<div class="goods">
		<goods-list-item v-for="item in goodsList" :goodsItem="item">
		</goods-list-item>
	</div>
</template>

<script>


	import GoodsListItem from "components/content/goodsList/GoodsListItem";
	export default {
		props : {
			goodsList : {
				type : Array,
				default : []
			}
		},
		components : {
			GoodsListItem
		},
		name: "GoodsList"

	}
</script>

<style scoped>

	.goods{
		display: flex;
		flex-wrap: wrap;
		padding: 2px;
		justify-content: space-around;
	}

</style>
