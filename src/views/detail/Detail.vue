<template>
	<div id="detail">
		<detail-nav-bar/>
		<scroll ref="scroll" class="content">
			<detail-swiper :topImages="topImages"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
		</scroll>
	</div>
</template>

<script>

	import Scroll from "components/common/scroll/Scroll";

	import DetailNavBar from "views/detail/childComps/DetailNavBar"
	import DetailSwiper from "views/detail/childComps/DetailSwiper"
	import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo"
	import DetailShopInfo from "views/detail/childComps/DetailShopInfo"
	import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";

	import {getDetailData,Goods,Shop} from "network/detail"

	export default {
		name: "Detail",
		components : {
			DetailSwiper,
			DetailNavBar,
			DetailBaseInfo,
			DetailShopInfo,
			Scroll,
			DetailGoodsInfo
		},
		props : {
			iid:{
				type : String,
				default : null
			}
		},
		data : function (){
			return {
				topImages : [],
				goods : {},
				shop : {},
				detailInfo : {}
			}
		},
		created() {
			 getDetailData(this.iid).then(res =>{
			 	  const data = res.result;
			 		this.topImages = data.itemInfo.topImages;
					this.goods = new  Goods(data.itemInfo, data.columns, data.shopInfo.services);
					this.shop = new Shop(data.shopInfo);
					this.detailInfo = data.detailInfo;
			 });

		},
		methods : {
			imageLoad : function (){
				this.$refs.scroll.refresh();
			}
		}
	}
</script>

<style scoped>

	#detail{
		position: relative;
		z-index: 100;
		height: 100vh;
		background: #fff;
	}

	.content{

		 height: calc(100% - 44px);
		 overflow: hidden;
	}
</style>
