<template>
  <div class="main">
  <!-- 头部搜索框 -->
      <div class="header">
        <img src="../../static/img/titleView.png" alt="">
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="              搜索我的尖叫好物">
        </div>
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
import recommend from './recommend'
import furniture from './furniture'
import active from './active'
import home from './home'


// 导出
export default {
  name: 'index',
  data () {
    return {
      who:'recommend',
      navlist:['推荐','家具','家居','活动'],
      current:0
    }
  },

  methods:{
      handleFocus(index){
            this.current=index;
            if (index===0) {
              this.who ='recommend';
            }
           else if (index===1) {
              this.who ='furniture';
            }
           else if (index===2) {
              this.who ='home';
            }
           else {
              this.who ='active';
            }
       }
  },
  components:{
    recommend,
    home,
    furniture,
    active
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 /*------------------头部搜索框----------------*/
    .main{
      overflow:hidden;
    }
    .header{
      overflow:hidden;
      box-sizing:border-box;
      width:100%;
      height: 0.44rem;
      padding:0.2rem;
      padding-bottom: 0rem;
      margin-bottom: 0.1rem;
      img{
          height:0.16rem;
          width:0.65rem; 
          overflow:hidden;
          /*width:20%;*/
          float:left;
          
      }
      .search {
        
          input{
          position: absolute;
          float:left;
          background-color: #F5F5F5;
          display: inline-block;
          width: 80%;
          height: 0.3rem;
          border-radius: 0.2rem;
          border:none;
          outline:none;
          top:0.1rem;
          margin-left: 0.1rem;
        }
        i{
          z-index: 10;
          position: absolute;
          left:1.2rem;
          top:0.15rem;
          font-size: 0.18rem;
        }
      }

    }
    /*------------------动态组件导航栏----------------*/
    .nav{
      /*display:flex;*/
      ul{
        
        width: 100%;
        margin:0rem 0.15rem;
        display:flex;
        justify-content:space-around;
        li{
          color:gray;
          margin:0rem 0.13rem;
          height:0.4rem;
          line-height: 0.3rem;
          flex:1;
          float:left;
          text-align: center;
          /*border-bottom: 0.03rem solid black;*/
        }
      }
    }
    /*----------------高亮------------------*/
    .focus{color:black;
      border-bottom: 0.03rem solid black;
    }
</style>
