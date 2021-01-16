<template>
	<div class="tab_bar_item" @click="itemClick">
		<div>
			<div v-if="!isActive" ><slot name="item-icon"></slot></div>
			<div v-else><slot  name="item-icon-active"></slot></div>
		</div>
		<div :style="activeStyle" >
			<slot name="item-text" v-bind:user="user"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "TabBarItem",
	props : {
		path : {
			type : String
		},
		activeColor : {
			type : String,
			default : "red"
		}
	},
	data : function(){
		return {
			user : {name : "陈树彪",age:18}
		};
	},
	methods : {
		itemClick : function (){
			//this.$router.replace(this.path);
			this.$router.replace({path : this.path});
		}
	},
	computed : {
		isActive : function(){
			return this.$route.path.indexOf(this.path) !== -1;
		},
		activeStyle() {
			return this.isActive ? {color: this.activeColor} : {}
		}


	}
}
</script>

<style scoped >
.tab_bar_item{
	flex: 1;
	text-align: center;
	height: 49px;
	font-size: 14px;
}

</style>
