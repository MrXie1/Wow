<template>
  <div >
	  <header>
      <div class="img">
        <img src="https://img.wowdsgn.com/brand/logo/f371c746-b86b-4352-be21-eda1524e1bdc_2dimension_800x800.jpg?imageslim" alt=""> 
        <div class="title">
          <strong>大朴</strong>
        </div>
      </div>
      <div class="daputext">
        <p>大朴是由原库巴网创始人王治全在2012年创立的品牌，这也是王治全继库巴网之后的的二次创业项目，是一家致力于“高安全性、高质量、高性价比”的家居品牌电商。发展三年多以来，大朴以其独特的产品布局和市场定位，被业内和消费者称为为“中国的无印良品”。
大朴对家居产品的安全、舒适、天然有着近乎偏执的追求。纺织类产品多采用棉、麻、丝、绒等天然材料，纸巾、洗衣液等快消品都使用无添加、易降解、天然环保的原材料。在设计美学上，大朴主张“侘寂之美”，删繁就简、大道至朴，还原“物为人用”的初心和本性，在宁静中寻得生活的禅意。</p>
      </div>  
    </header>
      <ul class="body clear"
      v-infinite-scroll="loadMore"
       infinite-scroll-disabled="loading"
       infinite-scroll-immediate-check ="false"
       infinite-scroll-distance="0">
        <li v-for="data in datalist" class="border" @click = "handleClick(data.productId)">
          <img :src="data.productImg" alt="">
          <div class="desc">
            <p class="title">{{ data.productTitle }}...</p>
            <em>￥{{data.sellPrice}}</em>
            <del>￥{{data.originalPrice}}</del>
            <p>{{data.prizeOrSlogan}}</p>
          </div>
        </li>
      </ul>
      <p class="info">{{msg}}</p>
  </div>
</template>
  
<script>
import bus from '../bus'
import axios from 'axios'
// import vuex from "vuex"
export default {
  name: 'brand',
  data () {
    return {
      datalist:[],
      current:1,
      hide:false,
      loading:false,
      msg:'正在加载中...'
    }
  },

  methods:{
    handleClick(productId){
      this.$router.push('/item/' + productId)
    },
    loadMore(){
      this.current++;
      if(this.current > 3){
        this.loading = true;
        this.msg = '我是有底线的--';
        return;
      }
      fetch(`https://m.wowdsgn.com/brand/910/products?pageSize=10&currentPage=${this.current}&_=${new Date().getTime()}`).then(res=>{
        return res.json()
      }).then(res=>{
        this.datalist = [...this.datalist,...res.data];
      })
    }
  },

  mounted(){
    fetch(`https://m.wowdsgn.com/brand/910/products?pageSize=10&currentPage=1&_=${new Date().getTime()}`).then(res=>{
      return res.json()
    }).then(res=>{
      this.datalist = res.data;
      bus.$emit("footerbarhide",false)
    })
  },

  beforeDestroy(){
    bus.$emit("footerbarhide",true);
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header{
    margin: 0;
    //height: 100%;
    background: #f5f5f5;
    .img{
      padding-top: .3rem;
      margin: auto;
      width: 1rem;
      img{
      border-radius: 50%;
      margin: auto;
      width: 1rem;
      //height: 1rem;
      }
      .title{
        margin-left: .35rem;
        margin-top: .1rem;
      }    
    }
    .daputext{
      padding: .2rem;
      color: gray;
    }
  }
  .body{
    // overflow: hidden;
    // height: 20rem;
    .border{
      border-right: 1px solid #f5f5f5;
      border-bottom: 1px solid #f5f5f5;
      height: 2.75rem;
      width: 1.86rem;
      float: left;
      img{
        width: 1.85rem;
      }
      .desc{
        margin-top: .2rem;
        margin-left: .15rem;
        font-size: .12rem;
        color: #808080;
        // letter-spacing: .01rem;
        text-align: Justify;
        .title{
          height: .18rem;
          width: 100%;
          overflow: hidden;
        }
        em{
          font-style: normal;
          color: black;
        }
      } 
    }
  }
  .info{
    color: #333;
    text-align: center;
    line-height: 1rem;
  }
</style>