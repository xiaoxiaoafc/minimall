<template>
	<swiper  class="detail-swiper">
		<swiper-item v-for="item in topImages">
			<a :href="item" >
				<img :src="item" class="item" >
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import Swiper from "components/common/swiper/Swiper";
	import SwiperItem from "components/common/swiper/SwiperItem";
	export default {
		props : {
			topImages : {
				type : Array,
				default : [],
			}
		},
		components : {
			Swiper,
			SwiperItem
		},
		name: "DetailSwiper"
	}
</script>

<style scoped>

.item{
	height: 400px;
	width: 100%;
}
</style>
