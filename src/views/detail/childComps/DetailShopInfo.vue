<template>
	<div class="shop-info">
		<div class="shop-top">
			<img :src="shop.logo">
			<span>{{shop.name}}</span>
		</div>
		<div class="shop-middle">
			<div class="shop-middle-left">
				<div class="count">
					<div>{{shop.sells | sellCountFilter}}</div>
					<div>总销量</div>
				</div>
				<div class="goodsnum">
					<div> {{shop.goodsCount}}</div>
					<div>全部宝贝</div>
				</div>
			</div>
			<div class="shop-middle-rigth">
				<div v-for="(item, index) in shop.score" :key="index">
					<span>{{item.name}}</span>
					<span class="score" :class="{'score-better': item.isBetter}">{{item.score}}</span>
					<span class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></span>
				</div>

			</div>
		</div>
		<div class="shop-button">进店逛逛</div>
	</div>
</template>

<script>
	export default {
		props : {
			shop : {
				type : Object,
				default : {}
			}
		},
		name: "DetailShopInfo"
	}
</script>

<style scoped>

	.shop-info{
		padding: 0px 8px;
		border-bottom: 5px solid #f2f5f8;

	}
	.shop-top{
		display: flex;
		align-items: center;
	}
	.shop-top img{
		width: 40px;
		height: 40px;
	}
	.shop-top span{
		margin-left: 10px;
	}

	.shop-middle{
		display: flex;
		justify-content: space-between;
		text-align: center;
		font-size: 15px;
	}

	.shop-middle-left{
		display: flex;
		flex: 1;
		border-right: 1px solid rgba(0,0,0,.1);
	}

	.shop-middle-left > div{
		 flex: 1;

	}

	.shop-middle-rigth{
		text-align: left;
		font-size: 13px;
		display: flex;
		flex-direction: column;
		padding-left: 10px;
		flex: 1;
	}
	.shop-middle-rigth > div > span{
		margin-left: 10px;
	}
	.shop-button{
		text-align: center;
		border-radius: 8px;
		border:1px solid #f2f5f8;
		background: #f2f5f8;
	 	width: 100px;
		padding: 10px;
		margin: 20px auto;

	}

	.shop-middle-right div span {
		padding: 5px 0;
	}

	 .score {
		color: #5ea732;
	}

.score-better {
		color: #f13e3a;
	}
</style>
