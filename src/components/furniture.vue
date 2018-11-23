<template>

  <div class="main">
   <div>
      <button type="button" class="back-top small" @click="backTop()" v-show="backTopShow">Top</button>
  </div>
      <!-- 引入轮播图 -->
        <div class="module1 swiper-container">
             <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="data in src" :key="data.id">
                      <img :src="data.bannerImgSrc" alt="">
                 </div>
             </div>
             <!-- 如果需要分页器 -->
             <div class="swiper-pagination"></div>
             <!-- 内容部分 -->
        </div>
       <section v-for="data in list">  
            <div class="content">
              <!-- 广告部分 -->
                 <h2>{{data.moduleName}}</h2>
                 <p>{{data.moduleDescription}}</p> 
                 <div v-if="data.moduleContent.banners" class="banner">
                    <div class="banner1">
                        <img v-if="data.moduleContent.banners.length===1" v-for="srcs in data.moduleContent.banners" :src="srcs.bannerImgSrc" alt="">
                    </div>
                    <ul class="banner3">
                      <li>
                          <img v-if="data.moduleContent.banners.length===3" v-for="srcs in data.moduleContent.banners" :src="srcs.bannerImgSrc" alt="">
                      </li>
                    </ul>
                    
                </div>
                  
                 <!-- 产品部分 -->
                <div v-if="data.moduleContent.products" class="product"> 
                    
                    <!-- 是否有等于15张图片产品轮播 -->
                        <div class=" module2 swiper-container" v-if=" data.moduleContent.products.length===15" >
                             <div class="swiper-wrapper">
                                  <div class="swiper-slide product15" v-for="pros in data.moduleContent.products" :key="data.id">
                                      <img :src="pros.productImg" alt="">
                                      <p class="price">￥{{pros.sellPrice}}</p>
                                      <p>{{pros.productName}}</p>
                                 </div>
                             </div>
                             <a href="#">查看更多</a>
                        </div>
                        <!-- 产品有6张图片 -->
                        <div class="product6" v-if=" data.moduleContent.products.length===6">
                          <ul>
                            <li v-for="pros in data.moduleContent.products" :key="data.id">
                                <img :src="pros.productImg" alt="">
                                <p class="price">￥{{pros.sellPrice}}</p>
                                <p>{{pros.productName}}</p>
                            </li>
                          </ul>
                        </div>
                    <!-- 产品有17张产品图片 -->
                        <div class="product17" v-if=" data.moduleContent.products.length===17">
                          <ul>
                            <li v-for="pros in data.moduleContent.products" :key="data.id">
                                <img :src="pros.productImg" alt="">
                                <p>{{pros.productName}}</p>
                                <p class="price">￥{{pros.sellPrice}}</p>
                            </li>
                          </ul>
                        </div>
                        <!-- 产品有18张产品图片 -->
                        <div class="product18" v-if=" data.moduleContent.products.length===18">
                          <ul>
                            <li v-for="pros in data.moduleContent.products" :key="data.id">
                                <img :src="pros.productImg" alt="">
                                <p>{{pros.productName}}</p>
                                <p class="price">￥{{pros.sellPrice}}</p>
                            </li>
                          </ul>
                        </div>
                        <!-- 产品有21张产品图片 -->
                        <div class="product21" v-if=" data.moduleContent.products.length===21">
                          <ul>
                            <li v-for="pros in data.moduleContent.products" :key="data.id">
                                <img :src="pros.productImg" alt="">
                                <p>{{pros.productName}}</p>
                                <p class="price">￥{{pros.sellPrice}}</p>
                            </li>
                          </ul>
                        </div>
                </div>
                
                
            </div> 
        </section>
  </div>
</template>
  
<script>
  import axios from "axios"

  //引入加载中库
  import { Indicator } from 'mint-ui';
  // 引入轮播模块
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.css";
  export default {
  name: 'furniture',
  data () {
    return {
      list:[],
      src:[],
      backTopShow:false
    }
  },

  methods:{
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
      }
  },
     mounted(){
      // 回到顶部
      window.addEventListener('scroll', this.handleScroll)
      //加载中
      Indicator.open({
          text: '正在加载中...',
          spinnerType: 'fading-circle'
        });
     // 请求数据
        axios.get("/v2/page?pageId=1&tabId=10005&_=1542852047875").then(res=>{
        this.list=res.data.data.modules.slice(1)
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
                          slidesPerView: 3,
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
    .module2 a{
      color:black;
      text-align: center;
      margin-left: 1.5rem;
      font-size: 0.14rem
    }
    .module1{
      img{
        width: 100%;
      }
    }
    .content{
      clear:both;
      background: white;
      padding:0.15rem;
      /*border-bottom: 0.16rem solid lightgray;*/
      
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
     
      .product{
        .product15{
          width: 100%;
          ul{
          clear:both;
          /*display:flex;*/
            li{
              float: left;
            }
          }
        }
        
        
        .module2 img{
            width: 70%;
            display: block;
          }
        
      }
      .product6{
          width: 100%;
        ul{
          clear:both;
          /*display:flex;*/
            li{
              width: 32%;
              float: left;
              img{
                width: 100%;
              }
            }
          }
        }
      .product6 li{
            width: 50%;
          }
      img{
        width: 30%;
        height: 35%;
        flex:1;
        float:left;
        margin-right: 0.1rem;
      }
    }
    .banner1 img{
      width: 100%;
    }
    .banner3 img{
      width: 30%;
      height: 35%;
    }
   .product .product17 li{
        width: 50%;  
        float: left;
        img{
          width: 100%;
        }
   }
   .product .product18 li{
        width: 50%; 
        float: left;
        img{
          width: 100%;
        }
   }
   .product .product21 li{
        width: 50%;
        float: left;
        img{
          width: 100%;
        }
   }
</style>
