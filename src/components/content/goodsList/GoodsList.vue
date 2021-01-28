<template>
	<div class="goods">
		<goods-list-item v-for="(item,index) in goodsList" :key="index"  :goodsItem="item" @loadImage="loadImage()">
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
		name: "GoodsList",
		methods : {
			loadImage : function (){
				this.$emit("loadImage");
			}
		}

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
