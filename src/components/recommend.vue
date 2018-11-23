<template>
   <div class="main">
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
        <section v-for="data in datalist"> 
          
            <div class="content">
                 <h2>{{data.moduleName}}</h2>
                 <p>{{data.moduleDescription}}</p> 
                 <div v-if="data.moduleContent.banners">
                    <img v-if="data.moduleContent.banners[0]"  :src="data.moduleContent.banners[0].bannerImgSrc" alt="">
                </div>
                <!-- 是否有小图片三张广告 -->
                <div v-if="data.moduleContent.products" class="product">
                    <ul class="three">
                        <li v-for="pros in data.moduleContent.products" v-if=" data.moduleContent.products.length<4">
                          <img :src="pros.productImg" alt="">
                          <p>{{pros.productName}}</p>
                          <p>￥{{pros.sellPrice}}</p>
                        </li>
                    </ul>
                    <!-- 是否有小图片四张广告轮播 -->
                      <!-- 引入轮播图 -->
                        <div class=" module2 swiper-container" v-if=" data.moduleContent.products.length>4" >
                             <div class="swiper-wrapper">
                                  <div class="swiper-slide" v-for="pros in data.moduleContent.products" :key="data.id">
                                      <img :src="pros.productImg" alt="">
                                      <p>{{pros.productName}}</p>
                                      <p class="price">￥{{pros.sellPrice}}</p>
                                 </div>
                             </div>
                             <router-link to="/more">
                              <div @click="footerhide()">
                                查看全部
                              </div>
                             </router-link>
                        </div>
                </div>
                
            </div>
            
        </section>
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
 


  export default {
    name: 'recommend',
    data () {
      return {
        datalist:[],
        src:[],
        hide:false
      }
    },

    methods:{
      footerhide(){
        this.$store.commit("footerbarhide",this.hide)
      }
    },
    mounted(){
      //加载中
      Indicator.open({
          text: '正在加载中...',
          spinnerType: 'fading-circle'
        });
     // 请求数据
        axios.get("/v2/page?pageId=1&tabId=1&_=1542783616113").then(res=>{
        this.datalist=res.data.data.modules.slice(1)
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
    .module2 a{
      color:black;
      text-align: center;
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



