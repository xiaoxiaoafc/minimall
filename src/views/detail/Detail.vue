<template>
	<div id="detail">
		<detail-nav-bar/>
		<scroll ref="scroll" class="content">
			<detail-swiper :topImages="topImages"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
			<detail-param-info :goodsParam="goodsParam"></detail-param-info>
			<detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
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
	import DetailParamInfo from "views/detail/childComps/DetailParamInfo";
	import DetailCommentInfo from "views/detail/childComps/DetailCommentInfo";

	import {getDetailData,getRecommend,Goods,Shop,GoodsParam} from "network/detail"

	export default {
		name: "Detail",
		components : {
			DetailSwiper,
			DetailNavBar,
			DetailBaseInfo,
			DetailShopInfo,
			Scroll,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,

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
				detailInfo : {},
				goodsParam : {},
				commentInfo : {},
				recommendList:[]
			}
		},
		created() {
			 getDetailData(this.iid).then(res =>{
			 	  const data = res.result;
			 	  //顶部轮播图图片
			 		this.topImages = data.itemInfo.topImages;
			 		//产品信息
					this.goods = new  Goods(data.itemInfo, data.columns, data.shopInfo.services);
					//购物信息
					this.shop = new Shop(data.shopInfo);
					//详情信息
					this.detailInfo = data.detailInfo;
					//商品参数
					this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule);
					//一条评论
				 if (data.rate.list) {
					 this.commentInfo = data.rate.list[0];
				 }

				 getRecommend().then((res, error) => {
					 if (error) return
					 this.recommendList = res.data.list
				 })


			 });

		},
		methods : {
			imageLoad : function (){
				if(this.$refs.scroll)this.$refs.scroll.refresh();
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
