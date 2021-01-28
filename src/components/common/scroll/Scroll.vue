<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>

</template>

<script>

	import BScroll from 'better-scroll'

	export default {
		name: "Scroll",
		props : {
			pullUpLoad : {
				default:false
			}
		},
		data : function (){
			return {
				scroll : {}
			}
		},
		components : {
			BScroll
		},
		mounted() {
			setTimeout(()=>{
				this.scroll = BScroll(this.$refs.wrapper, {
					pullUpLoad: true,
					click :true
				});
				this.scroll.on("pullingUp",()=>{
						this.$emit("pullingUp");

				});
				this.scroll.on("scroll",(position)=>{
					this.$emit("scroll",position);

				})
			},10);
		},
		methods : {
			finishPullUp : function (){
				this.scroll.finishPullUp();
			},
			scrollTo : function (x,y,time){
				this.scroll.scrollTo(x,y,time)
			},
			refresh : function (){
				this.scroll.refresh();
			}
		}
	}
</script>

<style scoped>

</style>
