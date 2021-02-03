<template>
	<div v-if="Object.keys(goodsParam).length > 0" class="param-info">


		<table class="info-sizes" v-for="(tableItem,tableIndex) in goodsParam.sizes">
			<tr v-for="(trItem,trIndex) in tableItem">
				<td v-for="(tdItem,tdIndex) in trItem">
					{{tdItem}}
				</td>
			</tr>
		</table>


		<table class="info-param">
			<tr v-for="(item,index) in goodsParam.infos">
				<td class="info-param-key">{{item.key}}</td>
				<td class="param-value">{{item.value}}</td>
			</tr>
		</table>



	</div>
</template>

<script>
	export default {
		props : {
			goodsParam : {
				type : Object,
				default : {}
			}
		},
		name: "DetailParamInfo"
	}
</script>

<style scoped>
	.param-info{
		padding: 20px 15px;
		font-size: 14px;
		border-bottom: 5px solid #f2f5f8;
	}

	.info-param{
		width: 100%;
		border-collapse: collapse;
	}
	.param-info  tr{
		height: 42px;
	}

	.param-info  tr td {
		border-bottom: 1px solid rgba(100,100,100,.1);
	}


	.info-param-key{
		width: 95px;

	}

	.info-sizes{
		width: 100%;
		margin-top: 10px;
		border-bottom: 5px solid #f2f5f8;
	}

	.param-value{
		color :#eb4868;
	}



</style>
