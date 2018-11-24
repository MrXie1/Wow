<template>
   <div class="main">
      <div>
        <button type="button" class="back-top small" @click="backTop()" v-show="backTopShow">Top</button>
      </div>
    <!-- 引入轮播图 -->
        <div class="module1 swiper-container">
           <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="data,index in src" :key="data.id">
                    <img :src="data.bannerImgSrc" alt="">
               </div>
           </div>
           <!-- 如果需要分页器 -->
           <div class="swiper-pagination"></div>
             
        </div>
        <!-- 内容部分 -->
        <!-- <section v-for="data in datalist"> -->
              <!-- v-infinite-scroll="loadMore"
              infinite-scroll-disabled="loading"
              infinite-scroll-immediate-check="false"
              infinite-scroll-distance="0" -->
        <section v-for="data in datalist" > 

            <div class="content" >
              
                 <h2>{{data.moduleName}}</h2>
                 <p>{{data.moduleDescription}}</p> 
                 <!-- 是否有小图片三张广告 -->
                 <div v-if="data.moduleContent.banners" @click="clickBanner(data.moduleContent.banners[0].bannerLinkTargetId)">
                    <img v-if="data.moduleContent.banners[0]"  :src="data.moduleContent.banners[0].bannerImgSrc" alt="">
                </div>
                <!-- 是否有小图片产品图片 -->
                <div v-if="data.moduleContent.products" class="product">
                    <ul class="three">
                        <li v-for="pros in data.moduleContent.products" v-if=" data.moduleContent.products.length<4">
                          <img :src="pros.productImg" alt="" @click="handelClick(pros.productId)">
                          <!-- <router-link to='/more' tag="img" :src="pros.productImg" ></router-link> -->
                          <p>{{pros.productName}}</p>
                          <p>￥{{pros.sellPrice}}</p>
                        </li>
                    </ul>
                    <!-- 是否有小图片四张广告轮播 -->
                      <!-- 引入轮播图 -->
                        <div class=" module2 swiper-container" v-if=" data.moduleContent.products.length>4" >
                             <div class="swiper-wrapper">
                                  <div class="swiper-slide" v-for="pros in data.moduleContent.products" :key="data.id">
                                      <img :src="pros.productImg" alt="" @click="handelClick(pros.productId)">
                                      <p>{{pros.productName}}</p>
                                      <p class="price">￥{{pros.sellPrice}}</p>
                                 </div>
                             </div>
                            <div @click="changeAll(data.moduleContent.id)" class="more">
                                查看全部
                            </div>
                        </div>
                </div>
                
            </div>
            
        </section>
        <!-- <p >{{msg}}</p> -->
   </div>
</template>
  
<script>
// 请求数据
  import axios from "axios"
// 引入轮播模块
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.css";

  //引入加载中库
  import { Indicator } from 'mint-ui';
  // 引入无限滚动
  import { InfiniteScroll } from 'mint-ui';
  Vue.use(InfiniteScroll);
  import Vue from "vue";


  export default {
    name: 'recommend',
    data () {
      return {
        datalist:[],
        src:[],
        hide:false,
        backTopShow:false,
        // loading:false,
        msg:"正在加载中.....",
        last:[],
        num:10,
        indexList:[],
        //yly改过-------------
        groupId: ''
        // loading:false,
        // msg:"正在加载中.....",
        // last:[],
        // num:10
      }
    },

    methods:{
      handelClick(productId){
        this.$router.push('/item/'+ productId); 
      },
      changeAll(data){
        this.$router.push('/productGroup/' + data);
      },
      changeAll(data){
        this.$router.push('/productGroup/' + data);
      },
      backTop() {
        let back = setInterval(() => {
          if(document.body.scrollTop||document.documentElement.scrollTop){
            document.body.scrollTop-=100;
            document.documentElement.scrollTop-=100;
          }else {
            clearInterval(back)
          }
        },100)
      },
        handleScroll(){
          if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
            this.backTopShow=true;
          }
          else {
            this.backTopShow=false;
          }
        },
        clickBanner(brandid){
          this.$router.push('/brand/' + brandid)
        }
    },
    // 无限滚动
  // https://m.wowdsgn.com/v2/page?pageId=1&tabId=1&_=1543045969985 
    // loadMore(){
    //   console.log(aaaaa)
    //      for(var i=0; i<11;i++){
    //          num++;
    //          this.last.push(this.datalist[this.num])
    //      }

         
    //     },
    mounted(){
      // 回到顶部
      window.addEventListener('scroll', this.handleScroll)
      //加载中
      Indicator.open({
          text: '正在加载中...',
          spinnerType: 'fading-circle'
        });
     // 请求数据
        axios.get("/v2/page?pageId=1&tabId=1&_=1542783616113").then(res=>{
        this.datalist=res.data.data.modules.slice(1)
        this.last=this.datalist.slice(0,10)
        // console.log(res.data.data.modules.slice(1))
        this.src=res.data.data.modules[0].moduleContent.banners
         // console.log(res.data.data.modules.slice(1)[2].moduleContent.products) 
        
         // 在请求完轮播图片之后引入轮播代码【swiper初始化】
         this.$nextTick(()=>{
             new Swiper ('.module1', {
                  loop: true, // 循环模式选项
                  slidesPerView: 1,
                  spaceBetween: 20,
                  // 如果需要分页器
                  pagination: {
                    el: '.module1 .swiper-pagination',
                  },
                  // 如果需要滚动条
                  scrollbar: {
                    el: 'module1 .swiper-scrollbar',
                  },
            }) 
            new Swiper('.module2',{
                          pagination: {
                            el: '.module2 .swiper-pagination',
                          },
                          loop: false, // 循环模式选项
                          // slidesPerView: 4,
                          // spaceBetween: 30,
                          slidesPerView: 4,
                          // slidesPerColumn: 2,
                          spaceBetween: 30,
                          navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                          },
                      });
         })
          Indicator.close();  //隐藏loadings
      })
    }//mounted的尾巴
  }
</script>

<style scoped lang="scss">
     .small {
    position: fixed;
    right: 0.1rem;
    bottom: 0.6rem;
    z-index: 20;
    width:0.5rem;
    height:0.5rem;
    background:lightgray;
    text-align: center;
    line-height: 0.4rem;
    color:white;
    font-size: 0.2rem;
    border-radius: 50%;
    border:none;
    
  }
    .module2 .more{
      color:black;
      margin-left: 1.5rem;
      font-size: 0.14rem
    }
    .swiper-container{
      img{
        width: 100%;
      }
      .swiper-pagination-bullet-active{
        background: white !important;
      }
    }
    .content{
      background: white;
      padding:0.15rem;
      border-bottom: 0.16rem solid lightgray;
      h2{
        text-align: center;
        font-size: 0.20rem;
        margin:0.15rem;
      }
      p{
        text-align: center;
        font-size: 0.12rem;
        color:gray;
        margin-bottom: 0.25rem;
        
      }
      .price{
          color:black;
        }
      img{
        width: 100%;
      }
      .product{
        ul{
          display:flex;
         .three{
            li{
              float:left;
              flex:1;
            } 
          }
          .four{
            li{
              float:left;
            }
          }
        }
      }
    }
</style>



