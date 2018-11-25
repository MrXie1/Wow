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
		historylist:[],



		parentProductId:'',
		arr:[],
		list:[],
		src:[],
		listTitle: '',
		hjPath:[],
		listContent: [{name: '上新',key: 'onShelfTime'},{name: '销量',key: 'sales'},{name: '价格',key: 'price'}],
		categoryTopList: [{name:'沙发',id:20,img:'<img src="/static/10_客厅与卧室.png">'},{name:'椅凳',id:21},{name:'休闲椅',id:2012},{name:'床',id:2310},{name:'柜架',id:24},{name:'餐桌',id:2210},{name:'茶几和边桌',id:2211},{name:'书桌',id:2212},{name:'隔断',id:2414}],
		categoryBottomList: [{name:'灯具',id:25,inner: [{name:'All',id:25,img:'<img src="/static/11_灯具.png">'},{name:'落地灯',id:2510},{name:'吊灯',id:2511},{name:'氛围灯',id:2512},{name:'台灯',id:2513},{name:'灯泡和配件',id:2514}]},{name:'用餐',id:26,inner: [{name:'All',id:26,img:'<img src="/static/12_用餐.png">'},{name:'餐具',id:2610},{name:'餐桌布置',id:2612},{name:'咖啡和茶',id:2613},{name:'酒具',id:400080}]},{name:'时尚生活',id:32,inner: [{name:'All',id:32,img:'<img src="/static/13_时尚生活.png">'},{name:'生活用品',id:3210},{name:'首饰',id:3211},{name:'箱包',id:3212},{name:'雨伞',id:3213},{name:'电子',id:3214},{name:'个人护理',id:3215},{name:'文具',id:3217},{name:'手表',id:400001}]},{name:'烹饪',id:27,inner: [{name:'All',id:27,img:'<img src="/static/14_烹饪.png">'},{name:'锅具',id:2710},{name:'厨房用具',id:2711},{name:'烘焙器具',id:2713}]},{name:'纺织品',id:28,inner: [{name:'All',id:28,img:'<img src="/static/15_纺织品.png">'},{name:'地毯',id:2810},{name:'靠垫抱枕',id:2811},{name:'床上用品',id:2812},{name:'毛巾织物',id:2813}]},{name:'家饰',id:29,inner: [{name:'All',id:29,img:'<img src="/static/16_家饰.png">'},{name:'时钟',id:2910},{name:'墙饰',id:2911},{name:'摆件',id:2912},{name:'香薰和蜡烛',id:2913},{name:'花瓶花盆',id:2914},{name:'镜子',id:2915},{name:'挂画',id:400002}]},{name:'卫浴',id:31,inner: [{name:'All',id:31,img:'<img src="/static/17_卫浴.png">'},{name:'浴室家具',id:3111},{name:'浴室用品',id:3112}]}],
		furnitureisShow: false,
		householdisShow: false,
		// footisShow: true,
	    change:'onShelfTime'


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

		

		},
		//	hjdreamer 添加开始
		changeFurnitureisShow(state,payload){
			state.furnitureisShow = payload
		},
		changeHouseholdisShow(state,payload){
			state.householdisShow = payload
		},
		// changeFootisShow(state,payload){
		// 	state.footisShow = payload
		// },
		changeListTitle(state,payload){
			state.listTitle = payload
		},
		changeHJPath(state,payload){
			state.hjPath = payload
		}
		//	hjdreamer 添加结束


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
			},

		getHJAction(store,payload){
			axios.get(`/pages/category/${payload.categoryId}?pageNumber=${payload.pageNumber}&orderBy=onShelfTime&sort=desc&_=${new Date().getTime()}`).then(res=>{
				store.commit("changeHJPath",res.data.data.products)
				console.log(res.data.data)
			})
		}

		
	}
})
export default store
