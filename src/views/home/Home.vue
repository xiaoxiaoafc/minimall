<template>
	<div id="home">
		<nav-bar class="home-nav-bar" ><template #conter><div>购物街</div></template></nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<recommend-view :recommends = "recommends"></recommend-view>
		<feature-view></feature-view>
		<tab-control class="tab-control" :title="['流行','新款','精选']"></tab-control>
		<goods-list :goodsList="goods['pop'].list"></goods-list>

	</div>

</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";

import {getHomeMultidata,getHomeGoods} from "network/home.js"

import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";


export default {
  name: "Home",
	data : function(){
  	 return {
			 banners: [],
			 recommends: [],
			 goods: {
				 'pop': {page: 0, list: []},
				 'new': {page: 0, list: []},
				 'sell': {page: 0, list: []},
			 },

		 }
	},
	components: {
		HomeSwiper,
  	NavBar,
		RecommendView,
		FeatureView,
		TabControl,
		GoodsList
	},
	created :function () {
  	//获取轮播图 以及下面的 小广告
		this.getHomeMultidata();

		this.getHomeGoods('pop');
		this.getHomeGoods('new');
		this.getHomeGoods('sell');
	},
	methods : {
		getHomeMultidata : function (){
			getHomeMultidata().then(result =>{
				this.banners = result.data.banner.list;
				this.recommends = result.data.recommend.list;
			});
		},
		getHomeGoods : function(type){
			const  page = this.goods[type].page + 1;
			getHomeGoods(type,page).then(result =>{
				this.goods[type].list.push(...result.data.list);
				this.goods[type].page = page;
			});
		}
	}
}
</script>

<style scoped>

#home{
	padding-top: 44px;
	width: 100%;
}

.home-nav-bar{
	position: fixed;
	background-color: var(--color-tint);
	color: #fff;
	z-index: 1;
	right: 0px;
	left: 0px;
	top: 0px;
}


.tab-control{
	position: sticky;
	top: 44px;
	background: #fff;
	z-index: 9;
}



</style>
