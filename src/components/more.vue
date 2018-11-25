<template>
  <div class="box">
    <nav>
      <img src="https://img.wowdsgn.com/product-group/images/a7a7b9dd-1da6-4972-9b76-6f46a352e0b9_2dimension_750x500.jpg?imageslim" alt="">
    </nav>
    <ul class="list"
      v-infinite-scroll="loadMore"
       infinite-scroll-disabled="loading"
       infinite-scroll-immediate-check ="false"
       infinite-scroll-distance="10">
      <li v-for ="data in datalist" @click = "handleClick(data.productId)">
        <img :src="data.productImg" alt="">
        <div class="p">
          <p class="title">{{data.productTitle}}</p>
          <p class="price">￥:{{data.sellPrice}}</p>
          <p class="prize">{{data.prizeOrSlogan}}</p>
        </div>
      </li>
    </ul>
    <p class="info">{{msg}}</p>
  </div>
</template>
<script>
import vuex from "vuex" 
import axios from "axios"
import { Indicator } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import bus from "../bus.js"
export default {
  name: 'category',
  data () {
    return {
      datalist:[],
      data:null,
      array:[],
      loading: false,
      current:1,//页数
      hide:true,
      msg:'正在加载中....'
    }
  },


  methods:{
    handleClick(productId){
      this.$store.commit("getGroupId",this.$route.params.groupId)
      this.$router.push('/item/' + productId);
    },
    loadMore() {
     this.current++;
      if(this.current > 2){
        this.loading = true;
        this.msg = '没有更多了';
        return;
      }
      axios.get(`/pages/productGroup/${this.$route.params.groupId}/products?pageNumber=${this.current}&_=${new Date().getTime()}`).then(res=>{
        this.datalist = [...this.datalist,...res.data.data.products]
        // this.$store.commit("getParentproductId",this.datalist)
        
      })
    }
  },
  beforeCreate(){
    bus.$emit("footerbarhide",false);
  },
  beforeDestory(){
    bus.$emit("footerbarhide",true);
  },
  mounted(){
      Indicator.open({
      text: '加载中....',
      spinnerType: 'fading-circle'
    });

      axios.get(`/pages/productGroup/${this.$route.params.groupId}/products?pageNumber=1&_=${new Date().getTime()}`).then(res=>{
        this.datalist = res.data.data.products;
        // this.$store.commit("getParentproductId",this.datalist)
        Indicator.close();
      })
       
      
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .box{
    nav{
      img{
        width: 100%;
      }
    }
    .list{
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
    .info{
      color: #333;
      text-align: center;
      line-height: 1rem;
    }
  }
</style>
