<template>
	<nav-bar>
		<template v-slot:left>
			<div class="title-left" @click="backClci">
				<img src="~assets/img/common/back.svg">
			</div>
		</template>
		<template v-slot:conter >
			<div class="title">
				<div class="title-item" v-for="(item,index) in titles" @click="titleItemClick(index)" :class="{active : index==currentIndex}">
					{{item}}
				</div>
			</div>

		</template>
	</nav-bar>
</template>

<script>
	import NavBar from "components/common/navBar/NavBar";
	export default {
		name: "DetailNavBar",
		data : function (){
			return {
				titles : ["商品","参数","评论","推荐"],
				currentIndex : 0,
			}
		},
		components : {
			NavBar
		},
		methods : {
			titleItemClick :function (index){
				this.currentIndex = index;
			},
			backClci : function (){
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
	.title{
		font-size: 14px;
		display: flex;

	}

	.active{
		color: var(--color-tint);
	}
	.title-item{
		flex: 1;
	}

	.title-left{
		margin-top: 6px;
	}


</style>
