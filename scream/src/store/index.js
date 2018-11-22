import Vuex from "vuex";
import axios from "axios";
import Vue from "vue";
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		parentProductId:'',
		arr:[]

	},
	mutations:{
		changeParentproductId(state,payload){
			state.parentProductId = payload;
			console.log(payload);
			// console.log(this.arr)

		}
	}
})
export default store