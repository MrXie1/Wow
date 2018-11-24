<template>
<!-- encodeURI() 字符编码-->
  <div class="main">
  <!-- 头部搜索框 -->
        <div class="header">
          <div id="searchInfo">
              <img id="searchIcon" src="/static/searchIcon-e1.png">
              <input type="search" id="searchInput" name="searchInput" placeholder="搜索我的尖叫好物" v-model="text" @change="handleInput(text)">
          </div>
          <i class="iconfont icon-shouye" @click="handleback"></i>
        </div>
  <!--品牌：尖叫设计  -->
        <div class="logo">
            <img src="../../static/img/logo.jpg" height="32" width="32" alt="">
            <span>品牌：尖叫设计</span>
            <i class="iconfont icon-leimupinleifenleileibie"></i>
        </div>
        <!-- 动态组件导航栏 -->
      <div class="nav">
        <ul class="clear">
          <li v-for="data1,index in navlist" @click="handleFocus(index)":class="current===index?'focus':''"><a>{{data1}}</a></li>
        </ul>
      </div>
      <!-- 保持活着 -->
      <keep-alive>
        <component :is="who"></component>
      </keep-alive>
  </div>
</template>
  
<script>
  // 导入动态组件导航、
import new1 from './new1'
import price1 from './price1'
import sale1 from './sale1'

import axios from "axios"
import bus from "../bus"
export default {
  name: 'result',
  data () {
    return {
      text:'',
      who:'new1',
      navlist:['上新','销量','价格'],
      current:0
     
    }
  },

  methods:{
      handleback(){
        this.$router.push('/search/index')
      },
      handleInput(text){
        console.log(encodeURI(this.text));
        var keyword = this.text;
        // this.$store.commit("shuang",keyword)
        this.$router.push('/search/result/'+keyword)
        var id = this.$route.params.word
        console.log(id)
          //异步请求， 并将结果存储到 store中
        this.$store.dispatch("getSearchAction",id);
      },
     
       handleFocus(index){
            this.current=index;
            if (index===0) {
              this.who ='new1';
            }
           else if (index===1) {
              this.who ='sale1';
            }
           else if (index===2) {
              this.who ='price1';
            }
           else {
              this.who ='active';
            }
       },
  },
     components:{
      new1,
      sale1,
      price1,
    },
    beforeCreate(){
      bus.$emit("footerbarhide",false)
    }
    // beforeDestroy(){
    //   bus.$emit("footerbarhide",true)
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*------------------头部搜索框----------------*/
  .header{
    height:0.5rem;
    border-bottom: 1px solid lightgray;
    i{
      position: relative;
      left:0.6rem;
      top:0.1rem;
      font-size: 0.20rem;
    }
  #searchInfo {
  background: #f5f5f5; width: 67%; height: .3rem; border-radius: .2rem; position: relative; left: 0; top: 0; margin-left: .2rem; float: left; margin-top: 0.09rem;
  #searchIcon {
    width: .2rem; height: .2rem; position: absolute; left: .06rem; top: .02rem;
  }
  #searchInput {
      height: .24rem; position: absolute; left: .4rem; top: 0.025rem; border: none; outline: none; background: #f5f5f5;
  }
}
}
/*-----------------品牌：尖叫设计---------------------*/
.logo{
  height:0.52rem;
  width: 100%;
  padding:0.1rem;
  border-bottom: 0.1rem solid #f5f5f5;
  img{
    float:left;
    margin-right: 0.2rem;
  }
  span{
    float: left;
    line-height: 0.3rem;
    display:block;
    font-size: 0.14rem;
  }
  i{
    float: right;
    margin-right: 0.1rem;
    line-height: 0.3rem;
  }
}
 /*------------------动态组件导航栏----------------*/
    .nav{
      /*display:flex;*/
      ul{
        width: 100%;
        /*margin:0rem 0.15rem;*/
        display:flex;
        justify-content:space-around;
        li{
          color:lightgray;
          /*margin:0rem 0.13rem;*/
          height:0.4rem;
          line-height: 0.3rem;
          flex:1;
          float:left;
          text-align: center;
        }
      }
    }
    /*----------------高亮------------------*/
    .focus{color:black;
      border-bottom: 0.03rem solid black;
    }
</style>
