<template>
	<div id="home" class="wrapper">
		<nav-bar class="home-nav-bar" ><template #conter><div>购物街</div></template></nav-bar>
		<tab-control class="tab-control tab-control-flex"  ref="tabControl1"  @tabClick="tabClick" :title="['流行','新款','精选']" v-show="isTabFixed"></tab-control>
		<scroll
			class="content"
			ref="scroll"
			@pullingUp="loadMore"
			@scroll="contentScroll"
			>
			<home-swiper :banners="banners" @loadSwiperImage="loadSwiperImage"></home-swiper>
			<recommend-view :recommends = "recommends"></recommend-view>
			<feature-view></feature-view>
			<tab-control class="tab-control"  ref="tabControl2"  @tabClick="tabClick" :title="['流行','新款','精选']"></tab-control>
			<goods-list :goodsList="showGoods" @loadImage="loadImage()"></goods-list>
		</scroll>


		<back-top @click.native ="backClick" v-show="isShowBackTop"></back-top>
	</div>

</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

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
			 currentType : 'pop',//当前要获取的产品类型
			 isShowBackTop : false,//是否暂时回到顶部
			 loadImageTime : null,//上一个加载图片的定时器
			 tabControlOffsetTop : 0,//选分类tab到顶部的距离
			 isTabFixed :false//

		 }
	},
	computed : {
		showGoods : function (){
			return this.goods[this.currentType].list;
		}
	},
	components: {
		HomeSwiper,
  	NavBar,
		RecommendView,
		FeatureView,
		TabControl,
		GoodsList,
		Scroll,
		BackTop
	},
	created :function () {


	},
	mounted() {
//获取轮播图 以及下面的 小广告
		this.getHomeMultidata();
		this.getHomeGoods('pop');
		this.getHomeGoods('new');
		this.getHomeGoods('sell');

	},
	unmounted : function (){
		console.log("mmp")
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
				if(result){
					this.goods[type].list.push(...result.data.list);
					this.goods[type].page = page;
					if(this.$refs.scroll){
						this.$refs.scroll.finishPullUp();
					}
				}


			});

		},
		tabClick : function(index){
			  switch (index){
			  	case 0 :
			  		this.currentType = 'pop'
			  		break;
					case 1 :
						this.currentType = 'new'
						break;
					case 2 :
						this.currentType = 'sell'
						break;
				}
				this.$refs.tabControl1.currentIndex = index;
				this.$refs.tabControl2.currentIndex = index;
		},
		//加载更多
		loadMore : function (){
				this.getHomeGoods(this.currentType);
		},
		//回到顶部
		backClick : function (){
			this.$refs.scroll.scrollTo(0,0,3000);
		},
		contentScroll(position) {
			//回到顶部是否展示
			this.isShowBackTop = (-position.y) > 690;
			//到顶
			this.isTabFixed = (-position.y) > this.tabControlOffsetTop;
		},
		//图片加载重新刷新滚动区高度
		loadImage : function (){
			if(this.$refs.scroll){
				this.debounce(this.$refs.scroll.refresh)();
			}

		},
		debounce : function (fun,delay){
			let th = this;
			return function (...args){
				if (th.loadImageTime != null)clearTimeout(th.loadImageTime )
				th.loadImageTime = setTimeout(function (){
					fun.apply(args);
				},delay)
			}
		},
		//轮播图图片加载完后计算高度
		loadSwiperImage : function (){
			this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;

		}
	},
}
</script>

<style scoped>

#home{
	width: 100%;
}

.home-nav-bar{
	background-color: var(--color-tint);
	color: #fff;
}


.tab-control{
	left: 0px;
	right: 0px;
	background: #fff;
	z-index: 9;
}

.tab-control-flex{
	top:44px;
	position: fixed;

}


.content{
	position: absolute;
	overflow: hidden;
	top:44px;
	bottom: 49px;

}



</style>
