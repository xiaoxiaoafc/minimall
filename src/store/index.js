import { createStore } from 'vuex';

export default createStore({
  state: {
		count : 22,
		age : 19
  },
	getters : {
  	countAddAge : state => state.count +state.age
	},
  mutations: {
		increment : function (state,num){
			state.age = state.age + num;
		},

	},
  actions: {
		increment (context) {
			context.commit('increment')
		}

  },
  modules: {

  },
});
