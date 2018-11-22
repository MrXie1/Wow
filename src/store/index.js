import Vuex from "vuex";
import axios from "axios";
import Vue from "vue";
// 引入轮播模块
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		parentProductId:'',
		arr:[],
		list:[],
		src:[]

	},
	mutations:{
		changeParentproductId(state,payload){
			state.parentProductId = payload;
			console.log(payload);
			// console.log(this.arr)

		},
		getFinuturelist(state,payload){
		   state.list=payload;
		},
		getFinuturesrc(state,payload){
			state.src=payload;
			  
		}
	},
	//异步
	actions:{
		// https://m.wowdsgn.com/v2/page?pageId=1&tabId=10005&_=1542852047875
		getFinutureAction(store,payload){
			axios.get("/v2/page?pageId=1&tabId=10005&_=1542852047875").then(res=>{
				store.commit("getFinuturelist",res.data.data.modules.slice(1))
				store.commit("getFinuturesrc",res.data.data.modules[0].moduleContent.banners)
				// store.commit("getFinuturesrc2",res.data.data.modules.slice(1).moduleContent.banners)
				console.log(res.data.data.modules.slice(1))
				// console.log(res.data.data.modules.slice(1).moduleContent)
				// console.log(res.data.data.modules[0].moduleContent.banners)
			   

			})
		}
	}
})
export default store