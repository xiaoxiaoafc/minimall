<template>
	<swiper>
		<swiper-item v-for="item in banners">
			<a :href="item.link" >
				<img :src="item.image" @load="loadSwiperImage">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"
export default {
	props : {
		banners : {
			type : Array,
			default : []
		}
	},
	name: "HomeSwiper",
	components : {
		Swiper,
		SwiperItem
	},
	methods : {
		loadSwiperImage : function (){
			this.$emit("loadSwiperImage");
		}
	}
}
</script>

<style scoped>
 img {
	width: 100%;
}
</style>
