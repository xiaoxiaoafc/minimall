<template>
	<div class="info" v-if="Object.keys(goods).length > 0">
		<div class="title">
			{{goods.title}}
		</div>
		<div class="price">
			<span class="n-price">{{goods.newPrice}}</span>
			<span class="o-price">{{goods.oldPrice}}</span>
			<span class="disc">{{goods.discount}}</span>
		</div>
		<div class="other">
			<div>{{goods.columns[0]}}</div>
			<div>{{goods.columns[1]}}</div>
			<div>{{goods.services[goods.services.length-1].name}}</div>
		</div>
		<div class="service">
			<div class="info-service-item" v-for="index in goods.services.length-1" :key="index">
				<img :src="goods.services[index-1].icon">
				<span>{{goods.services[index-1].name}}</span>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		props : {
			goods : {
				type : Object,
				default : {}
			},
		},
		name: "DetailBaseInfo"
	}
</script>

<style scoped>

	.info{
		color: #999;
		width: 100%;
		padding: 0px 8px;
	}

	.price .n-price{
		font-size: 24px;
		color: var(--color-high-text);
	}

	.price .o-price{
		font-size: 13px;
		text-decoration: line-through;
		margin-left: 13px;
	}
	.price .disc{
		background-color: var(--color-high-text);
		padding: 2px 5px;
		border-radius: 8px;
		width: 30px;
		font-size: 12px;
		color: #fff;
		margin-left: 3px;
		position: relative;
		top: -8px;
	}

	.other{
		display: flex;
		justify-content: space-between;
		margin-top:30px;
		height: 30px;
		line-height: 30px ;
		margin-top: 10px ;
		border-bottom: 2px solid #efefef;
	}

	.service{
		width: 100%;
		height: 70px;
		line-height: 60px;
		display: flex;
		justify-content: space-between;
	}




	.service img{
		width: 13px;
		height: 13px;
		position: relative;
		top:2px;
	}
	.service span{
			font-size: 13px;
	}



</style>
