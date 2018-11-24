import Vuex from "vuex";
import axios from "axios";
import Vue from "vue";
// 引入轮播模块
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		arr:[],
		datalist:[],
		list:[],
		src:[],
		hide:true,
		indexList:[]


	},
	mutations:{
		changeParentproductId(state,payload){
			state.parentProductId = payload;

		},
		getFinuturelist(state,payload){
		   state.list=payload;
		},
		getFinuturesrc(state,payload){
			state.src=payload;
			  
		},
		getParentproductId(state,payload){
			console.log(payload);
			state.datalist = payload;
			
		},
		getProductInfo(state,payload){
			console.log(payload);
			state.indexList = payload;
		}
	},
	//异步
	actions:{
		getFinutureAction(store,payload){
			axios.get("/v2/page?pageId=1&tabId=10005&_=1542852047875").then(res=>{
				store.commit("getFinuturelist",res.data.data.modules.slice(1))
				store.commit("getFinuturesrc",res.data.data.modules[0].moduleContent.banners)
				// store.commit("getFinuturesrc2",res.data.data.modules.slice(1).moduleContent.banners)
				console.log(res.data.data.modules.slice(1))
			   

			})
		},
		
	}
})
export default store