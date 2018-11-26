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
  
  <!-- 热门搜索 -->
    <div class="hot">
    <p>热门搜索</p>
      <ul>
        <li v-for="data in hotlist" :key="data.id" @click="handlehistory(data)">{{data}}</li>
      </ul>
    </div>

  <!-- 历史搜索 -->
   <keep-alive>
     <div class="history">
        <p>历史搜索</p>
        <ul>
          <li v-for="db in $store.state.historylist" :key="db.id" @click="handlehistory(db)">{{db}}</li>
        </ul>
    </div>
  </keep-alive>
  </div>
</template>
  
<script>

 import axios from "axios"
 import bus from "../bus"
export default {
  name: 'views',
  data () {
    return {
      hotlist:["尖叫设计","暖手宝","沙发","杯子","餐具","茶具","吊灯","厨房","儿童","HAY","Arabia","家室","收纳","床上用品","旅行"],
      text:'',
      list:[],
      historylist:[],
    }
  },

  methods:{
      handleback(){
        this.$router.push('/search/index')
      },
      handleInput(text){
        // console.log(encodeURI(this.text));
        var keyword = this.text;
        this.historylist=this.$store.state.historylist
        this.historylist.unshift(this.text)
        // 编程式导航
        this.$router.push('/search/result/'+keyword);
        // 历史搜索记录存到store中
        this.$store.commit("gethistorylist",this.historylist)
      },
      handlehistory(data){
          this.$router.push('/search/result/'+data)
          var id = this.$route.params.word
          // console.log(this.$route)
          this.historylist=this.$store.state.historylist
          this.historylist.unshift(data)
          // if($store.state.historylist.indexOf(historylist)===-1){
          //   // 数组去重
          // }else{
          //   return
          //  }
          //异步请求， 并将结果存储到 store中
          this.$store.dispatch("getSearchAction",id);
          // 点击热门搜索的历史搜索记录存到store中
          this.$store.commit("gethistorylist",this.historylist)
      }
  },
  beforeCreate(){
    bus.$emit("footerbarhide",false)
  },
  beforeDestroy(){
    bus.$emit("footerbarhide",true)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*------------------头部搜索框----------------*/
  .header{
    height:0.4rem;
    border-bottom: 1px solid lightgray;
    i{
      position: relative;
      left:0.6rem;
      top:0.1rem;
      font-size: 0.20rem;
    }
  #searchInfo {
  background: #f5f5f5; width: 67%; height: .24rem; border-radius: .2rem; position: relative; left: 0; top: 0; margin-left: .2rem; float: left; margin-top: 0.09rem;
  #searchIcon {
    width: .2rem; height: .2rem; position: absolute; left: .06rem; top: .02rem;
  }
  #searchInput {
      height: .24rem; position: absolute; left: .4rem; top: 0; border: none; outline: none; background: #f5f5f5;
  }
}
}
/*----------------热门搜索-----------------------*/
.hot{
  padding:0.1rem;
  height:2.8rem;
  border-bottom: 1px solid white;
  p{
    font-size: 0.14rem;
    color:gray;
    margin-bottom: 0.2rem
  }
  ul{
    margin-left: 0.2rem;
    li{
      float: left;
      width:0.6rem;
      height:0.3rem;
      background: #f5f5f5;
      margin-right: 0.2rem;
      margin-bottom: 0.2rem;
      text-align: center;
      line-height: 0.3rem;
      font-size: 0.12rem;
    }
  }
}
/*------------------历史搜索-------------------*/
.history{
  padding:0.1rem;
  p{
    font-size: 0.14rem;
    color:gray;
    margin-bottom: 0.2rem
  }
  ul{
    margin-left: 0.2rem;
    li{
      box-sizing:border-box;
      float: left;
      /*width:0.6rem;*/
      padding:0.1rem;
      /*height:0.3rem;*/
      background: #f5f5f5;
      margin-right: 0.2rem;
      margin-bottom: 0.2rem;
      text-align: center;
      line-height: 0.1rem;
      font-size: 0.12rem;
    }
  }
}
</style>
