<template>
	<div class="tab-conterol">
		<div
				 class="tab-conterol-item"
				 v-for="(item,index) in title"
				 :class="{activi:currentIndex === index}"
				 @click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
export default {
	props : {
		title : {
			type : Array,
			default : []
		}
	},
	data : function(){
		return {
			currentIndex : 0
		}
	},
	methods : {
		itemClick : function(index){
			this.$emit('tabClick', index)
			this.currentIndex = index;
		}
	},
	name: "TabControl"
}
</script>

<style scoped>
	.tab-conterol{
		display: flex;
		text-align: center;
		height: 40px;
		line-height: 40px;

	}

	.tab-conterol .tab-conterol-item{
		flex: 1;
		text-align: center;
	}
	.tab-conterol .tab-conterol-item span{
		padding:5px;
	}

	.activi{
		color : var(--color-high-text)
	}
	.activi span{
		border-bottom: 3px solid var(--color-tint);
	}
</style>
