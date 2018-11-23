<template>
  <div>
      <div class="detailheader">
        <a href='/index' class="l">
            <i class="iconfont icon-shouye"></i>
        </a>
        <h3>商品详情</h3>
        <div class="r"><a><i class="iconfont icon-sousuo"></i></a></div>
      </div>
      <swipe class="my-swipe">
        <swipe-item class="slide1">
          <img src="https://img.wowdsgn.com/product/addtionalImage//2a447b6b-c28d-4877-9c77-f74354c5ea68_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
        <swipe-item class="slide2">
          <img src="https://img.wowdsgn.com/product/addtionalImage//ac7623cc-3779-4159-ad17-0972c035f4a1_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
        <swipe-item class="slide3">
          <img src="https://img.wowdsgn.com/product/images/df14765a-757f-481a-b904-d7fd5b0a9a5b.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
        <swipe-item class="slide4">
          <img src="https://img.wowdsgn.com/product/addtionalImage//83ada771-4900-4825-aee1-cf7642a68ccc_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
        <swipe-item class="slide4">
          <img src="https://img.wowdsgn.com/product/addtionalImage//4f18022f-9448-41b3-8775-b8ac3f85e4aa_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
        <swipe-item class="slide4">
          <img src="https://img.wowdsgn.com/product/addtionalImage//5d8ae741-7167-4a4f-ba2e-f6128adffa50_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
        <swipe-item>
          <img src="https://img.wowdsgn.com/product/images/df14765a-757f-481a-b904-d7fd5b0a9a5b.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
      </swipe>
      <div class="productInfo">  
        <p class="productName">{{shuzu2.productName}}</p>
        <p v-for = "data in shuzu2" class="price" :key="data.productId">{{data.sellPrice}}</p>
        <span class="original" v-for = "data in shuzu2" :key="data.productId">{{data.originalPrice}}</span> 
        <div>
          <div v-for = "data in list" class="title">{{data.title}}</div>
        </div>
      </div>
      <ul class="detailImg">
        <li v-for = "data,index in arr">
          <p v-if="data.type!==2" class="text">{{data.content}}</p>
          <img v-if="data.type==2" :src="data.content">
        </li>
      </ul>
      <div class="infoHeader">
            <div style=" text-align: center;">
                <span style="font-family: PingFangSC-Semibold;font-size: 16px;color: #000000;letter-spacing: 0;">产品信息</span><br>
                <span style="font-family: PingFangSC-Semibold;font-size: 12px;color: #000000;letter-spacing: 0;">COMMENT</span>
            </div>
            <a href="javascript:gotoComment();" class="commentListTitleRight" id="moreComment" style="display: none;">INFORMATION</a>
      </div>
      <img :src="img1" class="one" v-if="isShow">
      <img :src="img2" class="one" v-if="noShow">
      <ul class="iconimg" v-if = "isIcon">
        <li><img :src="icon1" @click="changeimg1()"></li>
        <li><img :src="icon2" @click="changeimg2()"></li>
      </ul>
      <div class='detailparam'>
        <h6>详细规格参数</h6>
        <ul class="param">
          <li v-for = "data in param"><span>{{data.attributeName}}</span><span>{{data.attributeValueText}}</span></li>
        </ul>
      </div> 
      <div class="infoHeader">
            <div style=" text-align: center;">
                <span style="font-family: PingFangSC-Semibold;font-size: 16px;color: #000000;letter-spacing: 0;">其他信息</span><br>
                <span style="font-family: PingFangSC-Semibold;font-size: 12px;color: #000000;letter-spacing: 0;">OTHER</span>
            </div>
            <a href="javascript:gotoComment();" class="commentListTitleRight" id="moreComment" style="display: none;">INFORMATION</a>
      </div>
      <div class="serverPromise">
        <div class="serverspan">
          <span>服务承诺
            <transition name="bounce" appear>
              <img src="../../static/img/xiangshangjiantouarrowup.png" alt="" @click="change1()">
            </transition>
          </span>
        </div>
        <div class="serverimg" v-show="isServer">
          <img src="../../static/img/servicepromise_bg.png" alt="">
          <div class="promise2">
            <img src="../../static/img/promise2.png" alt="">
            <div class="promiseTitle">价格保障/变动返差价</div>
            <div class="promiseDesc">7日保价</div>
          </div>
          <div class="promise3">
            <img src="../../static/img/promise3.png" alt="">
            <div class="promiseTitle">三年内质保</div>
            <div class="promiseDesc">7日保价</div>
          </div>
        </div>
        <div class="serverprice">
           <span>价格说明<img src="../../static/img/xiangshangjiantouarrowup.png" alt="" @click="change2()"></span>
        </div>
        <div class="promiseP" v-show="isP">
          <p>
             划线价格：划线的价格可能是商品的专柜价、吊牌价、正品零售价、指导价、曾经展示过的销售价等，仅供您参考
          </p>
          <p>
             未划线价格：未划线的价格是商品的销售标价，具体的成交价格可能因会员使用优惠券、积分等发生变化，最终以订单结算价格为准。
          </p>
          <p>
             * 此说明仅当出现价格比较时有效。若这件商品针对划线价格进行了特殊说明，以特殊说明为准    
          </p>
        </div>
      </div>
      <div class="infoHeader">
            <div style=" text-align: center;">
                <span style="font-family: PingFangSC-Semibold;font-size: 16px;color: #000000;letter-spacing: 0;">猜你喜欢</span><br>
                <span style="font-family: PingFangSC-Semibold;font-size: 12px;color: #000000;letter-spacing: 0;">WHAT’S HOT</span>
            </div>
            <a href="javascript:gotoComment();" class="commentListTitleRight" id="moreComment" style="display: none;">INFORMATION</a>
      </div>
      <div class="youlike">
        <ul>
          <li v-for ="data in list" @click = "handle(data.productId,data.parentProductId)">
            <img :src="data.productImg" alt="">
            <div class="p">
              <p class="title">{{data.productTitle}}</p>
              <p class="price">￥:{{data.sellPrice}}</p>
              <p class="prize">{{data.prizeOrSlogan}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="end">
        <span class="needhelp">需要帮助</span>
        <span class="time">周一至周五 9:00~18.30</span>
      </div>
      <br>
      <br>
      <div class="footer">
        <li class="iconphoto">
          <img src="../../static/img/xihuan.png" alt="">
          <img src="../../static/img/gouwuche.png" alt="" class="cart">
        </li>
        <li class="join">加入购物车</li>
        <li class="buy">立即购买</li>
      </div>
  </div>
</template>
  
<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from "axios"
import vuex from "vuex"
export default {
  name: 'detail',
  data () {
    return {
      array:[],
      list:[],
      arr:[],
      img1:'',
      img2:'',
      icon1:'',
      icon2:'',
      isShow:true,
      noShow:false,
      param:[],
      isServer:true,
      isP:false,
      shuzu2:[],
      isIcon: false,
      hide:true,
      likelist:[],
      detailList:[]
    }
  },
  inject:['reload'],
  methods:{
    handle(productId){
      console.log('click')
      this.$router.push('/item/' + productId);
      this.reload();
    },
    changeimg1(){
      this.isShow = true;
      this.noShow = false;
    },
    changeimg2(){
      this.noShow = true;
      this.isShow = false
    },
    change1(){
      this.isServer = !this.isServer
    },
    change2(){
      this.isP = !this.isP
    }
  },
  components:{
    Swipe,
    SwipeItem
  },
  mounted(){
    fetch(`/recommend/item?skuId=${this.$route.params.ylyid}&_=${new Date().getTime()}`).then(res=>{
      return res.json()
    }).then(res=>{
      this.list = res.data.skuInLists 
      this.$store.commit('getParentproductId',this.list) 
    });
    fetch(`/pages/productGroup/11788/products?pageNumber=1&_=${new Date().getTime()}`).then(res=>{
      return res.json()
    }).then(res=>{
      console.log(res);
      // this.detailList = res
    })
// http://localhost:8080/pages/productGroup/11788/products?pageNumber=1&_=1542954496866
    for(var i=0;i<this.$store.state.datalist.length;i++){
      if(this.$store.state.datalist[i].productId == this.$route.params.ylyid){
        console.log(this.$store.state.datalist[i].parentProductId)
        var j = this.$store.state.datalist[i].parentProductId
        fetch(`/itemdetail/spuInfos/${j}?_=${new Date().getTime()}`).then(res=>{
          return res.json()
        }).then(res=>{
          console.log(res.data.itemDetailIntroVoList);
          this.arr = res.data.itemDetailIntroVoList

          // this.arr =res.data.itemDetailIntroVoList
          // this.img1 = res.data.itemSizeImgVoList[0].imgUrl;
          // this.icon1 = res.data.itemSizeImgVoList[0].iconUrl;
          // this.img2 = res.data.itemSizeImgVoList[1].imgUrl
          // this.icon2 = res.data.itemSizeImgVoList[1].iconUrl
        });
      }
    }

    fetch(`/itemdetail/skuInfos/${this.$route.params.ylyid}?_=${new Date().getTime()}`).then(res=>{
      return res.json()
    }).then(res=>{
      console.log(res);
      this.param = res.data.skuAttrPairs;
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.detailheader{
  position: relative;
  height: .45rem;
  padding: 0 .1rem;
  border-bottom: 1px solid #f5f5f5;
  line-height: .45rem;
  i{
    font-size: .26rem;
  }
  a{
    line-height: .45rem;
  }
  h3{
    font-size: .16rem;
    position: absolute;
    left: 50%;
    margin-left: -.25rem;
  }
}
  .my-swipe {
   width: 3.75rem;
   height: 3rem;
    color: #fff;
    font-size: .3rem;
    text-align: center;
  }
  .productInfo{
    margin-left: .20rem;
    margin-top: .30rem;
    .productName{
      margin-bottom: .1rem;
    }
    .price{
      display: inline-block;
    }
    .title{
      color: white;
      background-color: #ff7070;
      font-size: .14rem;
      display: inline-block;
    }
    .original{
      color: #ccc;
      text-decoration: line-through;
      font-size: .12rem;
    }
  }
  .detailImg{
    li{
      background: #f5f5f5;
      img{
        width: 3.75rem;
      }
      .text{
        margin-left: .2rem;
        color: gray;
        font-size: .14rem;
        min-height: .4rem;
        padding-bottom: .2rem;
      }
    }
  }
  .infoHeader{
    width: 100%;
    height: .8rem;
    background-color: #f5f5f5;
    padding-top: .2rem;
  }
  .one{
    width: 3.75rem;
  }
  .iconimg{
    overflow: hidden;
    li{
      float: left;
      img{
        width: 1rem;
        height: 1rem;
      }
    }
  }
  .detailparam{
    h6{
      line-height: .3rem;
    }
    margin-left: .1rem;
    margin-right: .1rem;
    width: 3.5rem;
    /* text-align: center; */
  }
    .param{
      margin-top: .1rem;
      padding-bottom: .05rem;
      li{
        border-top: 1px solid #ccc;
       min-height: .4rem;
        line-height: .4rem;
        text-indent: .04rem;
        color: gray;
        font-size: .14rem;
      }
      span:nth-of-type(1){
        width: 1rem;
        height: 100%;
        display: inline-block
      }
      span:nth-of-type(2){
        /* margin-left: */
      }
    }
    .serverPromise{
      margin-top: .1rem;
      margin-left: .1rem;
      overflow: hidden;
      .serverspan{
        height: .62rem;
        line-height: .62rem;
        img{
          width: .2rem;
          height: .2rem;
          display: inline-block;
          float: right;
          line-height: .62rem;
          margin-top: .25rem;
          margin-right: .1rem;
        }
      }
      .serverprice{
        height: .62rem;
        line-height: .62rem;
        img{
          width: .2rem;
          height: .2rem;
          display: inline-block;
          float: right;
          line-height: .62rem;
          margin-top: .25rem;
          margin-right: .1rem;
        }
      }
      .serverimg{
          position: relative;
          img{
                width: 3.55rem;
                height: 1.4rem;  
              }
          .promise2{
           position: absolute;
           left: .5rem;
           top: .3rem;
           border-right: 1px dashed #ccc;
           padding-right: .2rem;
            img{
             
              width: .42rem;
              height: .42rem;
              margin-left: .3rem;
            }
            .promiseTitle{
              color: white;
              font-size: .12rem;
            }
            .promiseDesc{
              color: white;
              font-size: .12rem;
            }
          }
          .promise3{
           position: absolute;
           right: .5rem;
           top: .3rem;
            img{
             
              width: .42rem;
              height: .42rem;
              margin-right: .3rem;
            }
            .promiseTitle{
              color: white;
              font-size: .12rem;
            }
            .promiseDesc{
              color: white;
              font-size: .12rem;
            }
          }
        } 
     .promiseP{
      font-size: .14rem;
      color: gray;
      margin-left: .2rem;
      margin-right: .2rem;
      margin-bottom: .1rem;
     }

    } 
    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: rotateX(30deg);
      }
      100% {
        transform: rotateX(60deg);
      }
    }
    .youlike{
      box-sizing: border-box;
      overflow: hidden;
      li:nth-of-type(2n){
        border-right: none;
      }
      li{
        float: left;
        width: 1.855rem;
        height: 2.8rem;
        border-bottom: .01rem solid #f5f5f5;
        border-right: .01rem solid #f5f5f5;
        img{
            width: 1.85rem;
            height: 1.855rem;
          }
        .p{
            margin-top: .2rem;
            margin-left: .1rem;
          .title,.prize{
            display:inline-block;
            width: 1.855rem;
            height: .16rem;
            width: 100%;
            font-size: .12rem;
            color:#808080;
            overflow:hidden;
            white-space:nowrap; 
            text-overflow: ellipsis;
          }
          .price{
            color:#333;
            font-size: .14rem;
          }
        } 
      }
    }
    .end{
      background:white;
      line-height: .5rem;
      text-indent: .2rem;
      width:100%;
      height: .9rem;
      border-top:.2rem solid #f7f7f7;
      border-bottom:.2rem solid #f7f7f7;
      font-size: .14rem;
      .needhelp{
        color:#333;
      }
      .time{
        color:#FF7070;
      }
    }
    .footer{
      width:100%;
      height:.5rem;
      background:white;
      z-index: 22222;
      position: fixed;
      bottom: 0;
      display:flex;
      li{
        flex:1;
      }
      .iconphoto{
        text-align: center;
        line-height: .5rem;
        img{
          width:.2rem;
          height:.2rem;
          display: inline-block;
        }
        .cart{
          margin-left: .05rem;
        }
      }
      .join{
        background:#f5f5f5;
        text-align: center;
        line-height: .5rem;
      }
      .buy{
        background:#FFD444;
        text-align: center;
        line-height: .5rem;
      }
    }
</style>
