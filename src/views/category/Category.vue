<template>
	fdsaf {{countAddAge}}
	<input type="button" value="佳佳" @click="addAge"/>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState,mapGetters  } from 'vuex'

export default {
	name: "Category",
	components : {
		BScroll
	},
	methods : {
		addAge : function (){
			this.$store.commit('increment',1)
		}
	},
	mounted() {


	},
	computed : {
		...mapGetters(['countAddAge'])
	}
}
</script>

<style scoped>

</style>
