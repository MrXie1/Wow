import Vuex from "vuex";
import axios from "axios";
import Vue from "vue";
// 引入轮播模块
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		datalist:[],
		hide:true,
		indexList:[],
		groupId:'',
		//爽
		src:[],
		list1:[],
		list2:[],
		list3:[],
		historylist:[]



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

			state.indexList = payload;
		},
		getGroupId(state,payload){
			state.groupId = payload;
		},
		// 爽
		getSearchlist(state,payload){
		   state.list1=payload;
		},
		getSalelist(state,payload){
			state.list2=payload;
		},
		getPricelist(state,payload){
			state.list3=payload
		},
		gethistorylist(state,payload){
			 state.historylist=payload;
			 console.log(state.historylist)

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
				
				console.log(res.data.data.modules.slice(1))
			   

			})
		},
		// 爽
		// 上新请求
		getSearchAction(store,payload){
			axios.get(`/product/search?keyword=${encodeURI(payload)}&sort=onShelfTime&order=desc&currentPage=1&_=${new Date().getTime()}`).then(res=>{
				store.commit("getSearchlist",res.data.data.products)
				console.log(res.data.data.products)
			})
		},
		getSaleAction(store,payload){
			axios.get(`/product/search?keyword=${encodeURI(payload)}&sort=sales&order=desc&currentPage=1&_=${new Date().getTime()}`).then(res=>{
				store.commit("getSalelist",res.data.data.products)
				console.log(res.data.data.products)
			})
		},
	
		getPriceAction(store,payload){
			axios.get(`/product/search?keyword=${encodeURI(payload)}&sort=price&order=asc&currentPage=1&_=${new Date().getTime()}`).then(res=>{
				store.commit("getPricelist",res.data.data.products)
				console.log(res.data.data.products)
			})
		}

		
	}
})
export default store
