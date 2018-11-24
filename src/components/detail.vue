<template>
  <div>
      <div class="detailheader">
        <a href='/index' class="l">
            <i class="iconfont icon-shouye"></i>
        </a>
        <h3>商品详情</h3>
        <div class="r"><a><i class="iconfont icon-sousuo"></i></a></div>
      </div>
      <div class="headerImg">
        <img :src="shuzu2.productImg">
      </div>
      <div class="productInfo">  
        <p class="productName">{{shuzu2.productName}}</p>
        <p class="price" :key="shuzu2.parentProductId">￥：{{shuzu2.sellPrice}}</p>
        <span class="original" :key="shuzu2.productId">￥：{{shuzu2.originalPrice}}</span> 
        <div>
          <div v-for = "data in list" class="title">{{shuzu2.title}}</div>
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
          <li v-for ="data in list" @click = "handle(data.productId)">
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
      listarr:[],
      arr:[],
      img1:'',
      loading:false,
      img2:'',
      icon1:'',
      icon2:'',
      isShow:true,
      noShow:false,
      param:[],
      isServer:true,
      isP:false,
      shuzu2:'',
      isIcon: false,
      likelist:[],
      detailList:[],
      current:1,
      hide:false,
      indexList:[]
    }
  },
  inject:['reload'],
  methods:{
    handle(productId){
      console.log('click')
      this.$router.push('/item/' + productId);
      this.reload();
    },
    change1(){
      this.isServer = !this.isServer
    },
    change2(){
      this.isP = !this.isP
    },
  },
  components:{
    Swipe,
    SwipeItem
  },
  mounted(){
    fetch(`/recommend/item?skuId=${this.$route.params.ylyid}&_=${new Date().getTime()}`).then(res=>{
      return res.json()
    }).then(res=>{
      this.list = res.data.skuInLists;
      for(var i=0;i<this.list.length;i++){
        if(this.list[i].productId == this.$route.params.ylyid){
          console.log(this.list[i].parentProductId);
           this.listarr = this.list[i]
        }
      }
      this.$store.commit('getParentproductId',this.list) 
    });
    //查看全部page=1的数据
    fetch(`/pages/productGroup/10013/products?pageNumber=1&_=${new Date().getTime()}`).then(res=>{
      return res.json()
    }).then(res=>{
      this.detailList = res.data.products;
      console.log(this.detailList)
      for(var i=0;i<this.detailList.length;i++){
        if(this.detailList[i].productId == this.$route.params.ylyid){
          this.shuzu2 = this.detailList[i]
        }
      }  
    });
    //查看全部page=2的数据
    fetch(`/pages/productGroup/10013/products?pageNumber=2&_=${new Date().getTime()}`).then(res=>{
      return res.json()
    }).then(res=>{
      this.detailList = res.data.products;
      console.log(this.detailList)
      for(var i=0;i<this.detailList.length;i++){
        if(this.detailList[i].productId == this.$route.params.ylyid){
          this.shuzu2 = this.detailList[i]
        }
      }  
    });
    //从查看全部带来的数据大对象，渲染详情的页面
    for(var i=0;i<this.$store.state.datalist.length;i++){
      if(this.$store.state.datalist[i].productId == this.$route.params.ylyid){
        var j = this.$store.state.datalist[i].parentProductId
        fetch(`/itemdetail/spuInfos/${j}?_=${new Date().getTime()}`).then(res=>{
          return res.json()
        }).then(res=>{
          this.arr = res.data.itemDetailIntroVoList
        });
      }
    }
    //商品详情的规格参数
    fetch(`/itemdetail/skuInfos/${this.$route.params.ylyid}?_=${new Date().getTime()}`).then(res=>{
      return res.json()
    }).then(res=>{
      console.log(res);
      this.param = res.data.skuAttrPairs;
    })
    //首页的商品详情顶部图片请求
    this.indexList = this.$store.state.indexList;
    for(var i=0;i<this.indexList.length;i++){
      if(this.indexList[i].productId == this.$route.params.ylyid){
        this.shuzu2 = this.indexList[i]
      }
    }
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
.headerImg{
  img{
    width:100%;
  }
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
      z-index: 222224444444;
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
